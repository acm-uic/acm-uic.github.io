---
title: Proxmox RAID Setup
description: A guide to how RAID is setup on pre-existing Proxmox setups.
tags: [linux, raid, proxmox]
---

## Requirements / Prerequisites

- At least 2 SSD/HDDs of the same model. This must have the same capacity. Models with different revisions are usually okay.
- A Proxmox installation on at least one of the SSD/HDDs.

## Introduction

As of Proxmox 7.2, this does not natively support RAID drive configurations through the main setup wizard. As a result, RAID needs to be setup either before or after a Proxmox installation. 

For details on how to set this up _before_ Proxmox, Debian must be setup on the RAID configuration before installation. (See [Install Proxmox VE on Debian 11 Bullseye](https://pve.proxmox.com/wiki/Install_Proxmox_VE_on_Debian_11_Bullseye))

In this guide, we will walkthrough how to setup RAID _after_ a Proxmox installation on a single drive.

## Environment Example

- `/dev/sda` is the drive Proxmox has been installed onto.
- `/dev/sda1` is the BIOS partition
- `/dev/sda2` is the boot partition
- `/dev/sda3` is the Proxmox OS partition
- `/dev/sdb` is the identical drive that contains no data.


## Walkthrough

1. Proxmox uses a base Debian installation. `mdadm` must be installed for Software RAID to be handled by the kernel module. An `apt-update` must also be run if this is freshly installed.
```bash
apt update && apt install mdadm
```
 
2. Using `sfdisk`, we can extract the current partition configuration from the drive. We use grep and sed to filter out any labels/UUIDs that are specific to the `/dev/sda` drive. The partition table is applied to the new drive (`/dev/sdb`).
```bash
sfdisk -d /dev/sda > part_table
grep -v ^label-id part_table | sed -e 's/, *uuid=[0-9A-F-]*//' | sfdisk /dev/sdb
```
 
3. With `mdadm`, we can create a new RAID device in a degraded state. We first attach the new empty drive partition (`/dev/sdb3`).
```bash
mdadm --create /dev/md0 --level 1 --raid-devices 2 /dev/sdb3 missing
```

4. Using LVM, we create an LVM Physical Volume(PV) and add to existing Volume Group(VG). `/dev/pve` is the virtual device created by the Proxmox setup via LVM.
```bash
pvcreate /dev/md0
vgextend /dev/pve /dev/md0
```

5. Using LVM tools again, we move data from the original drive (`/dev/sda3`) to the new virtual RAID device (`/dev/md0`).
```bash
pvmove /dev/sda3 /dev/md0
```
 
:::caution

Note that step 5 will take a while to process, even with an SSD. Allow this step to complete successfully before proceeding.

:::

6. Now we remove the original drive from the LVM VG (`/dev/pve`). Remember that `dev/sdb3` is also now backing this VG.
```bash
vgreduce /dev/pve /dev/sda3
```
 
7. Add `/dev/sda3` to `/dev/md0` to start resyncing the RAID array.
```bash
mdadm --manage --add /dev/md0 /dev/sda3
```
 
8. Use `dd` to byte copy EFI and BIOS boot partitions to the new drive.
```bash
dd if=/dev/sda1 of=/dev/sdb1
dd if=/dev/sda2 of=/dev/sdb2
```

9. Install GRUB on all disks. This also adds entries in the UEFI boot options.
```bash
grub-install /dev/sda
grub-install /dev/sdb
```

10. This updates initramfs to support new drive layout
```bash
update-initramfs -u -k all
```
 
11. Wait for RAID-1 sync to finish
```bash
watch cat /proc/mdstat
```

## Verification

At the end of this walkthrough, your drive configuration should be similar to this:
```bash
# lsblk
NAME                 MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda                    8:96   0 465.8G  0 disk
├─sda1                 8:97   0  1007K  0 part
├─sda2                 8:98   0   512M  0 part  /boot/efi
└─sda3                 8:99   0 465.3G  0 part
  └─md0                9:0    0 465.1G  0 raid1
    ├─pve-swap       253:0    0     8G  0 lvm   [SWAP]
    ├─pve-root       253:1    0    96G  0 lvm   /
    ├─pve-data_tmeta 253:2    0   3.5G  0 lvm
    │ └─pve-data     253:4    0 338.4G  0 lvm
    └─pve-data_tdata 253:3    0 338.4G  0 lvm
      └─pve-data     253:4    0 338.4G  0 lvm
sdb                    8:112  0 465.8G  0 disk
├─sdb1                 8:113  0  1007K  0 part
├─sdb2                 8:114  0   512M  0 part
└─sdb3                 8:115  0 465.3G  0 part
  └─md0                9:0    0 465.1G  0 raid1
    ├─pve-swap       253:0    0     8G  0 lvm   [SWAP]
    ├─pve-root       253:1    0    96G  0 lvm   /
    ├─pve-data_tmeta 253:2    0   3.5G  0 lvm
    │ └─pve-data     253:4    0 338.4G  0 lvm
    └─pve-data_tdata 253:3    0 338.4G  0 lvm
      └─pve-data     253:4    0 338.4G  0 lvm
[... Other entries omitted for brevity ...]
```

`mdadm` should start automatically syncing. This is what it should look like after a successful resync.
```bash
# watch cat /proc/mdstat
Every 2.0s: cat /proc/mdstat              lee: Tue Jul  5 15:37:47 2022

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [r
aid4] [raid10]
md0 : active raid1 sda3[2] sdb3[0]
      487729152 blocks super 1.2 [2/2] [UU]
      bitmap: 1/4 pages [4KB], 65536KB chunk

unused devices: <none>
```

## Additional Notes

- You can probably apply this setup to the boot partiation as well, however this has not been tested yet.
- If a hard drive is replaced, you must manually copy the data from the first two partitions manually. When the drive is added back to the RAID array, `mdadm` should take care of the resyncing of data again.

## Additional Resources

- https://forum.proxmox.com/threads/howto-proxmox-ve-7-with-software-raid-1.93745/

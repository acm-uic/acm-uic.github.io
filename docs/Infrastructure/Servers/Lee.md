---
slug: /infrastructure/servers/lee
tags: [server, compute, proxmox]
---

# Lee

Current Location: SELE 2266

## Description

This is a server donated by [Bharat Middha](https://github.com/bmiddha) in honor of our previous admin, [Chase Lee](https://github.com/clee231).
This server is currently a Type-1 Hypervisor hosting Virtual Machines supporting the ACM Infrastructure.

## Hardware Configuration

Machine Model: Dell PowerEdge R510

### Chassis Details:

- 8-bay 3.5" HDD drive bays
- 2U

### CPU

- Model: Intel Xeon X5650
- Cores: 24
- Clock Speed: 2.67 Ghz

### Mainboard

- Model: Dell 0DPRKF A04
- Memory
  - Type: DDR3 @ 1333MHz 2Rx4 ECC
  - Total Capacity: 64 GB
  - Part Number: 36KSF1G72PZ-1G4D1

### Storage

- 6 x 6TB HDD (WDC WD60EZRZ-00GZ5B1)
- 2 x 500GB SSD (Samsung SSD 860 EVO 500GB)

## Setup Details

This hypervisor utilizes Proxmox as a Type-1 Hypervisor. (Installed July 5th, 2022)

The main hypervisor installation resides on `/dev/md0`, which is a RAID-1 setup across the two Samsung 500GB SSDs. Setup of this RAID-1 setup is documented in the [Proxmox RAID Setup](/docs/kb/Linux/proxmox-raid-setup) wiki page.

:::caution

While the main data is redundant via RAID-1, the boot partitions set in the UEFI boot entry only points to a single drive. (`UUID="0273-70A4"`) If the main drive needs replacement, updates to both the UEFI and `/etc/fstab` need to be made in order for the boot and mount processes to complete successfully.

:::

### Additional References

- https://forum.proxmox.com/threads/howto-proxmox-ve-7-with-software-raid-1.93745/
- https://wiki.archlinux.org/title/LVM_on_software_RAID#Boot_loader

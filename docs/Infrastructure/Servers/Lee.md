---
slug: /infrastructure/servers/lee
tags: [server, compute, proxmox]
---

# Lee

Current Location: CDRLC 2442

## Description

This is a server donated by [Bharat Middha](https://github.com/bmiddha) in honor of our previous admin, [Chase Lee](https://github.com/clee231).
This server is currently a Type-1 Hypervisor hosting Virtual Machines supporting the ACM Infrastructure.

## Hardware Configuration

Machine Model: Dell PowerEdge R510|CQ87C2S

### Chassis Details:

- 8-bay 3.5" HDD drive bays
- 2U

### CPU

- Model: 2x Intel Xeon X5650
  - Cores: 12c/24t total
  - Clock Speed: 2.66 Ghz

### Mainboard

- Model: Dell 0DPRKF A04
- Memory
  - Type: PC3-12800R
  - Total Capacity: 64 GB

### Addon Cards

- Intel X520-T2
- Intel X520-DA2

### Storage

- 6 x 6TB HDD (WDC WD60EZRZ-00GZ5B1)
- 2 x 500GB SSD (Samsung SSD 860 EVO 500GB)

### PSU

- 2x 870W

## Setup Details

This hypervisor utilizes Proxmox as a Type-1 Hypervisor. (Installed July 5th,
2022). The Proxmox install is part of the ACMAPP cluster.

This machine is provisioned on a ZFS mirror pool (RAID1).

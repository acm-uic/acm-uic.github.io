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

This machine is provisioned on a ZFS mirror pool (RAID1).

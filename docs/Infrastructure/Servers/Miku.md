---
slug: /infrastructure/servers/miku
tags: [server, compute, proxmox]
---

# Chase

Current Location: SELE 2266

## Description

This server was formerly named `bismark`.

## Hardware Configuration

Machine Model: Dell R610|19V6FP1

### Chassis Details:

- 8-bay 2.5" HDD drive bays
- 1U

### CPU

- Model: 2x Intel Xeon E5540
    - Cores: 8c/16t total
    - Clock Speed: 2.53 Ghz

### Mainboard

- Model: Dell 9P8FRD
- Memory
    - Type: PC3-12800R
    - Capacity: 96 GB

### Addon Cards

- Dell 0RT8N1

### Storage

- 1 x 500 GB

### PSU

- 2x 870W

## Setup Details

This hypervisor has Proxmox provisioned as a Type-1 Hypervisor. It is not
clustered with ACMAPP and is used by LUG.

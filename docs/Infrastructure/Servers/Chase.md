---
slug: /infrastructure/servers/chase
tags: [server, compute, proxmox]
---

# Chase

Current Location: CDRLC 2442

## Description

This is a server donated by Bharat in honor of our previous admin, [Chase Lee](https://github.com/clee231).

## Hardware Configuration

Machine Model: Dell R710|11W4TR1

### Chassis Details:

- 8-bay 2.5" HDD drive bays
- 2U

### CPU

- Model: 2x Intel Xeon X5660
  - Cores: 12c/24t total
  - Clock Speed: 2.8 Ghz

### Mainboard

- Model: Dell 00NH4P A12
- Memory
  - Type: PC3-12800R
  - Capacity: 288 GB

### Addon Cards

- Intel X520-T2
- Intel X520-DA2

### Storage

1x 4 TB HDD

### PSU

- 2x 870W

## Setup Details

This hypervisor has Proxmox provisioned as a Type-1 Hypervisor and is part of
the ACMAPP cluster.

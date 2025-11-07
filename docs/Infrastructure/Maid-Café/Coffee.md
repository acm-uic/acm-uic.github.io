---
slug: /infrastructure/maid-café/coffee
tags: [server, compute, proxmox]
---

# Coffee

Current Location: CDRLC 2433

## Description

- Machine Model: [Minisforum MS-01](https://www.minisforum.com/products/minisforum-ms-01?variant=49669512429874)
- Management: [JetKVM](https://jetkvm.com/products/jetkvm)

## Hardware Configuration

- Mini Workstation with a compact 1.78L footprint
- I/O:
  - 2x USB 2.0
  - 3x USB 3.0
  - 2x USB 4.0 (Type-C)
  - 1x HDMI
  - 2x SFP+ ports (Chipset Intel X710)
  - 2x RJ45 2.5Gbe (1 with Intel i226-V, 1 with Intel i226-LM)

### CPU

- [Intel Core i9-13900H](https://www.intel.com/content/www/us/en/products/sku/232135/intel-core-i913900h-processor-24m-cache-up-to-5-40-ghz/specifications.html)
  - 14 cores (6 Performance, 8 Efficiency)
  - 20 threads

### Mainboard

- Minisforum MS-01 motherboard
- 96 GB of DDR5 RAM

### Storage

- 4TB of M.2 NVMe SSD

### PSU

1x Minisforum MS-01 180W (external) power supply.

## Setup Details

This hypervisor has Proxmox provisioned as a Type-1 Hypervisor for the Maid-Café cluster.

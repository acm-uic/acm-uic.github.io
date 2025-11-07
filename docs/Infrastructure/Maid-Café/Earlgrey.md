---
slug: /infrastructure/maid-café/earlgrey
tags: [server, compute, proxmox]
---

# Earlgrey

Current Location: CDRLC 2433

## Description

- Machine Model: [Minisforum MS-A2](https://www.minisforum.com/products/minisforum-ms-a2)
- Management: [NanoKVM](https://wiki.sipeed.com/hardware/en/kvm/NanoKVM/introduction.html)

## Hardware Configuration

- Mini Workstation with a compact 1.78L footprint
- I/O:
  - 1x USB 2.0
  - 4x USB 3.0
  - 2x USB 3.2 Gen2 (Type-C)
  - 1x HDMI
  - 2x SFP+ ports (Chipset Intel X710)
  - 2x RJ45 2.5Gbe (1 with Intel i226-V, 1 with Realtek RTL8125)

### CPU

- [AMD Ryzen 9 9955HX](https://www.amd.com/en/products/processors/laptop/ryzen/9000-series/amd-ryzen-9-9955hx.html)
  - 16 cores
  - 32 threads

### Mainboard

- Minisforum MS-A2 motherboard.
- 2x 48GB DDR5-5600

### Storage

- 4TB Fanxiang S880E M.2 NVMe SSD (Ceph)
- 1TB Fanxiang S880 M.2 NVMe SSD (boot drive)

### PSU

1x Minisforum MS-A2 240W (external) power supply.

## Setup Details

This hypervisor has Proxmox provisioned as a Type-1 Hypervisor for the Maid-Café cluster.

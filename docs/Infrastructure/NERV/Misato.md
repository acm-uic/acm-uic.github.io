---
slug: /infrastructure/nerv/misato
tags: [server, compute]
---

# Misato

Current Location: CDRLC 2433

## Description

- Machine Model: [Minisforum 795S7](https://www.minisforum.com/products/minisforum-795s7)

### CPU

- [AMD Ryzen 9 7945HX](https://www.amd.com/en/products/processors/laptop/ryzen/7000-series/amd-ryzen-9-7945hx.html)
  - 16 cores
  - 32 Threads

## Hardware Configuration

- [GL.iNet Comet PoE KVM](https://store-us.gl-inet.com/products/comet-poe-gl-rm1pe-remote-kvm-control-over-internet?variant=54323505430819&country=US&currency=USD)
- I/O (including front panel connectors):
  - 3x USB 3.2 Gen 1
  - 3x USB 2.0
  - 1x DisplayPort 1.4
  - 1x HDMI 2.1
  - 1x 3.5mm audio jack

### Mainboard

- MINISFORUM BD795M motherboard
- 2x 32GB DDR5-5600 RAM

### Storage

- 1TB Fanxiang M.2 NVMe SSD (boot drive)
- NFS storage for data

### PSU

- 400W TFX Power Supply

## Setup Details

This is configured as a login node in the NERV cluster, managed via Slurm.

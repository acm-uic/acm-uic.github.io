# Bharat

Current Location: SELE 2266

## Description

This is a server donated by Chase in honor of our previous admin, [Bharat Middha](https://github.com/bmiddha).
This server is currently a Type-1 Hypervisor hosting Virtual Machines supporting the ACM Infrastructure.
This chassis supports VMs that requires mass storage.

## Hardware Configuration

Machine Model: Supermicro CSE-846 | Penguin Computing Icebreaker 4824

Chassis Details:

- 24-Bay 3.5" HDD drive bays
- 4U

### CPU

- Model: Intel(R) Xeon(R) CPU E5-2620
- Cores: 12
- Clock Speed: 2.0 Ghz

### Mainboard

- Model: SuperMicro X9DRi-F
- Memory: Micron MT72K8Z84G72LZ-1G4E2A7BF 4Rx4 PC3-10600L ECC REG
- Type: DDR3 ECC Registered 4Rx4 PC3-10600L (1333MHz)
- Capacity: 256 GB

## Current Configuration

Last Inventory: May 15, 2021

- Hostname: bharat.acm.cs
- Out-of-Band Management: bharat-ipmi.acm.cs

### Operating System

- OS: VMWare ESXi-6.5.0-20190702001-standard (VMware, Inc.)

### Virtual Machines

- TrueNAS

### Storage Configuration

- Highpoint SSD7101A-1 SSD Controller
  - HP SSD EX920 1TB x 2
- SAS2 Backplane
  - Seagate Exos X10 ST10000NM0016 x 11
  - Seagate IronWolf 10TB ST10000VN0004-1Z x 2
  - HGST HUH721010AL x 5
  - WDC WD101KRYZ-01 x 5
  - WDC WD101KFBX-68 x 1

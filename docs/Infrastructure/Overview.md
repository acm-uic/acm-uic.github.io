---
sidebar_position: 1
slug: /infrastructure/overview
description: Overview of ACM@UIC systems and network infrastructure.
---

# Infrastructure Overview

Primary ACM server infrastructure:

## Main Rack Layout

|     U | Name          | Type               | Description               |
| ----: | :------------ | :----------------- | :------------------------ |
| _N/A_ | oven-temp     | RPi                | Temperature Monitoring Pi |
|    42 |               | _RJ45 patch panel_ |                           |
|    41 | acmswitch2    | Switch             | Arista 10G Base-T         |
|    40 | acmswitch     | Switch             | Arista 10G SFP+           |
|    39 | acmswitch3    | Switch             | Quanta 1G Base-T          |
|    38 | ackem         | Server             | Router                    |
|    37 | littlebell    | Server             | Router                    |
|    36 | Miku          | Server             | LUG's Hypervisor          |
| 35-34 | Avocado       | Server             | Proxmox                   |
| 33-32 | Lee           | Server             | Proxmox                   |
| 31-30 | Chase         | Server             | Proxmox                   |
| 29-26 | Bharat        | Server             | Proxmox, TrueNAS          |
|    25 | Mikrotik Rose | Server, Switch     | _TBD_                     |
|    24 | Roxy          | Server             | _TBD_                     |
| 23-22 | Eris          | Server             | _TBD_                     |

## Maid-Caf&eacute;

|     U | Name                     | Type                 | Description                                                |
| ----: | :----------------------- | :------------------- | :--------------------------------------------------------- |
|    42 | USW-Pro-Max-48-PoE       | Switch               | Ubiquiti 48 PoE+/++ RJ45 and 4 SFP+                        |
|    41 |                          | _RJ45 patch panel_   |                                                            |
|    40 |                          | _Blank_              |                                                            |
| 39-38 | _TBD_                    | Raspberry Pi cluster | 10 Raspberry Pis                                           |
|    37 | Mikrotik CRS309-1G-8S+IN | Switch               | 8 SFP+ ports                                               |
| 36-32 | Maid-Caf&eacute; cluster | Cluster              | 4 Minisforum MS-01 and 1 Minisforum MS-A2                  |
| 31-26 | Max-Fi stuff             | `¯\_(ツ)_/¯`         |                                                            |
| 25-18 | NERV Cluster             | Cluster              | 4 Minisforum 795S7, 3 of which has RTX 4000 Ada Generation |

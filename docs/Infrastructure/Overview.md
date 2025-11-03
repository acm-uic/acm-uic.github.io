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
| 25    | Mikrotik Rose | Server, Switch     | _TBD_                     |
| 24    | Roxy          | Server             | _TBD_                     |
| 23-22 | Eris          | Server             | _TBD_                     |

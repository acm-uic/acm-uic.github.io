---
sidebar_position: 1
slug: /infrastructure/overview
description: Overview of ACM@UIC systems and network infrastructure.
---

# Infrastructure Overview

Primary ACM server infrastructure:

## Main Rack Layout

|     U | Name       | Type          | Description               |
| ----: | :--------- | :------------ | :------------------------ |
| _N/A_ | nas        | NAS Appliance | Synology NAS Appliance    |
| _N/A_ | oven-temp  | RPi           | Temperature Monitoring Pi |
|    42 |            | _Blank_       |                           |
|    41 | acmswitch2 | Switch        | Arista 10G Base-T         |
|    40 | acmswitch  | Switch        | Arista 10G SFP+           |
|    39 | acmswitch3 | Switch        | Quanta 1G Base-T          |
|    38 | ackem      | Server        | Router, pfSense           |
|    37 | littlebell | Server        | Router, pfSense           |
|    36 | miku       | Server        | LUG's Box, Proxmox        |
|    35 |            | _Blank_       |                           |
|    34 |            | _Blank_       |                           |
|    33 |            | _Blank_       |                           |
|    32 |            | _Blank_       |                           |
|    31 |            | _Blank_       |                           |
|    30 |            | _Blank_       |                           |
|    29 |            | _Blank_       |                           |
|    28 |            | _Blank_       |                           |
|    27 |            | _Blank_       |                           |
|    26 |            | _Blank_       |                           |
|    25 |            | _Blank_       |                           |
|    24 |            | _Blank_       |                           |
|    23 |            | _Blank_       |                           |
|    22 |            | _Blank_       |                           |
| 21-18 | bharat     | Server        | ESXi, TrueNAS             |
| 17-16 | lee        | Server        | Proxmox                   |
| 15-14 | chase      | Server        | Proxmox                   |
| 13-12 | avocado    | Server        | Proxmox                   |
| 11-10 |            | _Blank_       |                           |
|     9 |            | _Blank_       |                           |
|     8 | ups3       | UPS           | 1000VA                    |
|     6 | ups2       | UPS           | 2000VA                    |
|     4 | ups1       | UPS           | 3000VA                    |

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
|    38 | ackem      | Server        | Router                    |
|    37 | littlebell | Server        | Router                    |
|    36 | bismark    | Server        | LUG's Box                 |
|    35 | acmapp14   | Server        | acmapp member (Janeway)   |
|    34 | acmapp13   | Server        | acmapp member (Picard)    |
|    33 | acmapp12   | Server        | acmapp member (WiCS)      |
|    32 | acmapp11   | Server        | acmapp member (unlabeled) |
|    31 | acmapp10   | Server        | acmapp member (unlabeled) |
|    30 | acmapp9    | Server        | acmapp member             |
|    29 | acmapp8    | Server        | acmapp member             |
|    28 | acmapp7    | Server        | acmapp member             |
|    27 | acmapp6    | Server        | acmapp member             |
|    26 | acmapp5    | Server        | acmapp member             |
|    25 | acmapp4    | Server        | acmapp member             |
|    24 | acmapp3    | Server        | acmapp member             |
|    23 | acmapp2    | Server        | acmapp member             |
|    22 | acmapp1    | Server        | acmapp member             |
| 21-18 | bharat     | Server        | ESXi, TrueNAS             |
| 17-16 | lee        | Server        | Proxmox                   |
| 15-14 | chase      | Server        | ESXi                      |
| 13-12 | avocado    | Server        | ESXi                      |
| 11-10 | chopin     | Server        | ESXi                      |
|     9 |            | _Blank_       |                           |
|     8 | ups3       | UPS           | 1000VA                    |
|     6 | ups2       | UPS           | 2000VA                    |
|     4 | ups1       | UPS           | 3000VA                    |

# ACM/LUG Office (SELE 2264) Door Documentation

## Components

1. MagStripe Reader for reading UIC ID Cards.
   - [EVDEV](https://en.wikipedia.org/wiki/Evdev) driver written in Rust 
   to capture events directly from card reader.
   - Shell script that parses the input and finds and compares the UIN
   - Python script that actually uses GPIO to physically open the door.
2. Discord bot to open the door from discord
   - Work in Progress
   - Basically just calls the python script from before.

## EVDEV driver

- The card reader is basically the keyboard, presented in /dev/input/eventX. 
- The Rust program hijacks the input device to prevent spurious inputs to the OS.
(Technically, the raspberry pi would just be sitting at the TTY login prompt. Don't want
the input to also go there).
- Key press and unpress events are processed with [libxkbcommon](https://xkbcommon.org/)
to make sure special characters are handled. Example: SHIFT + 3 = #
- The utf8 result from above is printed to STDOUT (flushed at after each character).

### Shell script

- This is the legacy card_reader.sh (now called `new_card_reader.sh` script modified to have `?` as the delimiter.
- UIC ID Cards have ? as the last character.
- The output of the EVDEV Driver is piped to this shell script.
- This script contains a list of UINs allowed to open the door.
- TODO: Make it read allowed UINs from a file (BASH `mapfile` builtin).
- If the card is of an allowed UIN, the python scirpt to open the door is called.


### Deployment Information

- Systemd user service called `doorkeeper.service` located in `/home/pi/.config/systemd/user/doorkeeper.service`
- This service calls a shell script called `fuck-systemd.sh` located in `/home/pi/DOOR/door-driver/`
- This shell script calls the EVDEV Driver with its output piped to `new_card_reader.sh`
- Systemd messes up I/O redirection so the intermediary script is required.

## Discord Bot

- Systemd system service called discordbot.service.
- Simple python script that uses `py-cord`.
- Virtual Env in `/home/pi/doorkeeper-controller/botvenv`

## Wishlist

- Unjank the shell script.
- Add logging of successful door opens.
- Make discord bot be able to add and remove approved UINs.
- **Rewrite the whole thing in Rust top-down.**

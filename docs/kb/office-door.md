# ACM/LUG Office (SELE 2264) Door Documentation

## Components

1. MagStripe Reader for reading UIC ID Cards.
   - [EVDEV](https://en.wikipedia.org/wiki/Evdev) driver written in Rust
     to capture events directly from card reader.
   - Shell script that parses the input and finds and compares the UIN
   - Python script that actually uses GPIO to physically open the door.
   - Repository: [lugatuic/doorkeeper-driver](https://github.com/lugatuic/doorkeeper-driver)
   
2. Discord bot to open the door from discord
   - Work in Progress
   - Basically just calls the python script from before.


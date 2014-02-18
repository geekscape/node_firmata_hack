node\_firmata\_hack
=================

Experimenting with Firmata over a network connection, instead of a serial port.

Notes
-----
Unfortunately, serial port handling is spread across both Johnny-Five and
Firmata, resulting in no clean-cut abstraction or API that can be replaced
with a different data transport.

To make initial headway, "socat" is used to simulate a serial port via a
pseudo-TTY and an initial network implementation using the network interface
created by socat.

This is a temporary measure, until Johnny-Five / Firmata have a cleaner
separate of duties for communication.

Usage
-----
- Copy this project into .../johnny-five/node\_modules/firmata\_hack/
- Edit .../johnny-five/package.js as follows ...

   "dependencies": {
     "firmata\_hack": ">=0.0.0",

- Edit .../johnny-five/lib/board.js as follows ... 

   Firmata = require("firmata\_hack").Board,

- Edit .../johnny-five/eg/led.js as follows ...

   var board = new five.Board({ port: "/tmp/ttyNET0" });

- Terminal session 1: socat PTY,link=/dev/ttyNET0 TCP4-LISTEN:2000

- Terminal session 2: telnet localhost 2000

- Terminal session 3: node johnny-five/eq/led.js

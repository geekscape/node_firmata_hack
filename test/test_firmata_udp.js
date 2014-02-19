/*
 * Usage
 * ~~~~~
 * socat PTY,link=/tmp/ttyNET0 UDP6:localhost:2000
 *
 * node test_firmata_udp.js
 *
 * echo -n 'message 1' >/tmp/ttyNET0
 *
 * To Do
 * ~~~~~
 * - Respond to MESSAGE_REPORT_VERSION.
 * - Proactively send an initial MESSAGE_REPORT_VERSION.
 */

var FIRMATA_HOST = 'ip6-localhost';
var FIRMATA_PORT = 2000;

var dgram = require('dgram');

var server = dgram.createSocket('udp6');

server.on('error', function (err) {
  console.log('Server error:\n' + err.stack);
  server.close();
});

server.on('message', function (msg, rinfo) {
  console.log('Server got: ' + msg + ' from ' +
    rinfo.address + ':' + rinfo.port);
});

server.on('listening', function () {
  var address = server.address();
  console.log('Server listening ' +
      address.address + ':' + address.port);
});

server.bind(FIRMATA_PORT);

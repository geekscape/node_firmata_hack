var util   = require('util'),
    events = require('events');

var SerialPort = require('serialport').SerialPort;

var MIDI_RESPONSE = {};

// TODO: Implement MIDI responses
// TODO: Implement MIDI_RESPONSE[REPORT_VERSION]

var SYSEX_RESPONSE = {};

// TODO: Implement System Exclusive responses

var Board = function(port, options, callback) {
  console.log("FIRMATA_HACK ENABLED");
  events.EventEmitter.call(this);

  var board = this;

// TODO: Implement MODES, I2CMODES, STEPPER
// TODO: Implement state variables

  if (typeof port === 'object') {
    this.serialPort = port;
  }
  else {
    this.serialPort = new SerialPort(port, { baudrate: 57600, buffersize: 1 });
  }

  this.serialPort.on('error', function(message) {
    if (typeof callback === 'function') callback(message);
  });

// TODO: Implement this.serialPort.on('data') handler
// TODO NEXT: Implement this.reportVersionTimeoutId timer

// TODO: board.once('reportversion', ...
};

util.inherits(Board, events.EventEmitter);

// TODO: Implement Board.prototype.reportVersion function
// TODO: Implement Board.prototype.queryFirmware function
// TODO: Implement Board.prototype.analogRead function
// TODO: Implement Board.prototype.analogWrite function
// TODO: Implement Board.prototype.servoWrite function
// TODO: Implement Board.prototype.pinMode function
// TODO: Implement Board.prototype.digitalWrite function
// TODO: Implement Board.prototype.digitalRead function
// TODO: Implement Board.prototype.queryCapabilities function
// TODO: Implement Board.prototype.queryAnalogMapping function
// TODO: Implement Board.prototype.queryPinState function
// TODO: Implement Board.prototype.sendI2CConfig function
// TODO: Implement Board.prototype.sendString function
// TODO: Implement Board.prototype.sendI2CWriteRequest function
// TODO: Implement Board.prototype.sendI2CReadRequest function
// TODO: Implement Board.prototype.sendOneWireConfig function
// TODO: Implement Board.prototype.sendOneWireSearch function
// TODO: Implement Board.prototype.sendOneWireAlarmsSearch function
// TODO: Implement Board.prototype.sendOneWireRead function
// TODO: Implement Board.prototype.sendOneWireReset function
// TODO: Implement Board.prototype.sendOneWireWrite function
// TODO: Implement Board.prototype.sendOneWireDelay function
// TODO: Implement Board.prototype.sendOneWireWriteAndRead function
// TODO: Implement Board.prototype.setSamplingInterval function
// TODO: Implement Board.prototype.reportAnalogPin function
// TODO: Implement Board.prototype.reportDigitalPin function
// TODO: Implement Board.prototype.pulseIn function
// TODO: Implement Board.prototype.stepperConfig function
// TODO: Implement Board.prototype.stepperStep function
// TODO: Implement Board.prototype.reset function

module.exports = {
  Board: Board
//MIDI_RESPONSE:  MIDI_RESPONSE
//SYSEX_RESPONSE: SYSEX_RESPONSE
};

/*
 * To Do
 * ~~~~~
 * - Repeatedly request "Report Version" until a response is received.
 */

var util   = require('util'),
    events = require('events');

var SerialPort = require('serialport').SerialPort;

// Firmata message definitions

var MESSAGE_REPORT_VERSION = 0xF9;           // Stay compatible with Firmata V1

var MIDI_RESPONSE = {};

// TODO: Implement MIDI responses
// TODO: Implement MIDI_RESPONSE[REPORT_VERSION]

var SYSEX_RESPONSE = {};

// TODO: Implement System Exclusive responses

var Board = function(port, options, callback) {
  console.log("FIRMATA_HACK ENABLED");
  events.EventEmitter.call(this);

// Initialize default options (if required)

  if (typeof options === 'function') {          // 'options' weren't provided ?
    callback = options;
    options = {
      reportVersionTimeoutPeriod: 5000  // milliseconds
    };
  }

  var board = this;

// TODO: Implement MODES, I2CMODES, STEPPER
// TODO: Implement state variables

  this.reportVersionReceived = false;

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

// Set-up "report version" time-out, which will initiate some requests

  this.reportVersionTimeoutId = setTimeout(function () {
    if (this.reportVersionReceived === false) {
      this.requestReportVersion(function () {});
//    this.requestQueryFirmware(function () {});             // TODO: Implement
    }
  }.bind(this), options.reportVersionTimeoutPeriod);

// TODO: board.once('reportversion', ...
};

util.inherits(Board, events.EventEmitter);

/**
 * Request device Firmata version.
 * @param {function} callback Invoke when device reports its Firmata version
 */

Board.prototype.requestReportVersion = function(callback) {
  this.once('reportVersion', callback);
  this.serialPort.write(new Buffer([MESSAGE_REPORT_VERSION]));
};

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

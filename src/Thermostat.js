function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature < 25) {
    this.temperature++;
    return this.temperature;
  } else {
    throw new Error('Above 25 degrees not available in power saving mode');
  };
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
    return this.temperature;
  } else {
    throw new Error('Too chilly in here');
  };
};

function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
    return this.temperature;
  } else {
    throw new Error('Too chilly in here');
  };
};

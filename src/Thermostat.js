function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
  this.colour = 'yellow';
}

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature < 25 && this.isPowerSaving) {
    this.temperature++;
  } else if (this.temperature === 25 && this.isPowerSaving) {
    throw new Error('Above 25 degrees not available in power saving mode');
  } else if (this.temperature < 32 && !this.isPowerSaving) {
    this.temperature++;
  } else {
    throw new Error('Above 32 degrees not possible');
  }
  this.setColour();
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
  } else {
    throw new Error('Too chilly in here');
  }

  this.setColour();
};

Thermostat.prototype.powerSavingToggle = function() {
  this.isPowerSaving = !this.isPowerSaving;
  if (this.temperature > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.setColour = function() {
  if (this.temperature < 18) {
    this.colour = 'green';
  } else if (this.temperature < 25) {
    this.colour = 'yellow';
  } else {
    this.colour = 'red';
  }
};

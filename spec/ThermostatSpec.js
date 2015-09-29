describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has an initial value of 20', function() {
    expect(thermostat.temperature).toBe(20);
  });

  describe('up button', function() {

    it('will increase the temperature by one', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toBe(21);
    });

  });

  describe('down button', function() {

    it('will decrease the temperature by one', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toBe(19);
    });

    it('will not decrease temperature below 10 degrees', function() {
      thermostat.temperature = 10;
      expect(thermostat.decreaseTemp).toThrowError('Too chilly in here');
    });
  });

  describe('power saving on mode', function() {

    it('will not allow the temperature to increase above 25 degrees', function() {
      thermostat.temperature = 25;
      expect(function() { thermostat.increaseTemp(); }).toThrowError('Above 25 degrees not available in power saving mode');
    });
  });

  describe('power saving off mode', function() {

    it('will not allow the temperature to increase above 32 degrees', function() {
      thermostat.isPowerSaving = false;
      thermostat.temperature = 32;
      expect(thermostat.increaseTemp).toThrowError('Above 32 degrees not possible');
    });
  });
});

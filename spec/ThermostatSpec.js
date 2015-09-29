describe('Thermostat', function() {
  // var thermostat;

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
  });
});

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has an initial valuse of 20', function() {
    expect(thermostat.temperature).toBe(20);
  });

  describe('up button')
    it('will increase the temperature by one', function () {
    thermostat.increaseTemp();
    expect(thermostat.temperature).toBe(21);
  });
});

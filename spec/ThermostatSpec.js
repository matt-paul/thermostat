describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has an initial valuse of 20', function() {
    expect(thermostat.temperature()).toBe(20);
  });
});

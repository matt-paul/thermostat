describe('Interface', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    loadFixtures('Thermostat.html');
    setUpHTMLFixture();
  });

  it('displays the current temperature', function(){
    // $('#my-fixture').myTestedPlugin();
    expect(document).toBeVisible
  });

});
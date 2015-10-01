var thermostat = new Thermostat();
$('p#temperature').text(thermostat.temperature);

$('div#display').css('background-color', thermostat.colour);

$('button#up').click(function() {

  try {
    thermostat.increaseTemp();
    $('p#error').text('');
  }
  catch (err) {
    $('p#error').text(err);
  }
  finally {
    $('p#temperature').text(thermostat.temperature);
    $('div#display').css('background-color', thermostat.colour);
  };

});

$('button#down').click(function() {

  try {
    thermostat.decreaseTemp();
    $('p#error').text('');
  }
  catch (err) {
    $('p#error').text(err);
  }
  finally {
    $('p#temperature').text(thermostat.temperature);
    $('div#display').css('background-color', thermostat.colour);
  };

});

$('div#controls :checkbox').change(function() {
  thermostat.powerSavingToggle();
  $('p#temperature').text(thermostat.temperature);
  $('div#display').css('background-color', thermostat.colour);
});

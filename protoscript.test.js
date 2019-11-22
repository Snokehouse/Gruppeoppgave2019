const testRegistrer = require('./protoscript'); //Henter funksjonen som ble ekspotert fra "protoscript.js"

test('Skjekk om funksjonen er sann', () => { //Test som skal skjekker om funksjonen returnerer "true"
  expect(testRegistrer()).toBeTruthy();
});   
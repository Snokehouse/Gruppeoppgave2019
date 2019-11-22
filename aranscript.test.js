const testRegistrer = require('./aranscript');

test('Skjekk om sann og om arrayen inneholder det vi forventer', () => {

  expect(testRegistrer()).toBeTruthy(); //Tester om navn, sted og info ikker er tomme

  expect(testRegistrer()).toContain('Arangement: Fotball Cup | Sted: Østmarka | Info: Gøy for alle mellom 10-15 år</br>'); //Tester at arangementet blir lagt til i arrayen 
  //Viktig at contain stemmer med setningen som lages til arrayen

});     
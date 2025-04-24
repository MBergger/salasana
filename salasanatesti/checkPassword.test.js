const assert = require('assert');
const test = require('node:test');
const checkPassword = require('./checkPassword');

// Hyväksytty salasana
test('valid password passes', () => {
  assert.strictEqual(checkPassword('ValidPass1!'), true);
});

// Pituusvaatimus
test('too short password fails', () => {
  assert.strictEqual(checkPassword('Aa1!'), false); // alle 10 merkkiä
});

// Puuttuu iso kirjain
test('password without uppercase fails', () => {
  assert.strictEqual(checkPassword('lowercase1!'), false);
});

// Puuttuu pieni kirjain
test('password without lowercase fails', () => {
  assert.strictEqual(checkPassword('UPPERCASE1!'), false);
});

// Puuttuu numero
test('password without digit fails', () => {
  assert.strictEqual(checkPassword('NoDigits!!'), false);
});

// Puuttuu erikoismerkki
test('password without special character fails', () => {
  assert.strictEqual(checkPassword('NoSpecials1'), false);
});

// Juuri 10 merkkiä pitkä ja muuten validi
test('exactly 10 characters long valid password passes', () => {
  assert.strictEqual(checkPassword('Aa1!aaaaaa'), true);
});

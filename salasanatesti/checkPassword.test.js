// checkPassword.test.js
const assert = require('assert');
const test = require('node:test');
const checkPassword = require('./checkPassword');

test('valid password passes', () => {
  assert.strictEqual(checkPassword('ValidPass1!'), true);
});

test('too short password fails', () => {
  assert.strictEqual(checkPassword('Aa1!'), false);
});

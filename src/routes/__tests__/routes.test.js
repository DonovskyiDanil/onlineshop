'use strict';

const routes = require('..');
const assert = require('assert').strict;

assert.strictEqual(routes(), 'Hello from routes');
console.info('routes tests passed');

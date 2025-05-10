'use strict';

const controllers = require('..');
const assert = require('assert').strict;

assert.strictEqual(controllers(), 'Hello from controllers');
console.info('controllers tests passed');

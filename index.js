const assert = require('assert');

function add(a, b){
    return a+b;
}

assert.strictEqual(add(2,3), 5);
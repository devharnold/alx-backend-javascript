const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of a and b', function() {
        const expected = 30;
        const result = calculateNumber();
        assert.strictEqual(result, expected);
    });
})
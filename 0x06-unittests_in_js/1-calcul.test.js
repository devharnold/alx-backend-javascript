const assert = require('assert');
const { calculateNumber } = require('./1-calcul');

describe('calculateNumber', function() {
    //test suite to test for when the type is SUM
    it('Should orrectly add two rounded numbers when type is SUM', function(){
        const type = 'SUM';
        const a = 1;
        const b = 3;
        const expected = 4;
        const result = calculateNumber(type, a, b);
        assert.strictEqual(result, expected);
    });
    //test suite fo when the type is SUBTRACT
    it('Should correctly subtract two numbers when the type is SUBTRACT', function(){
        const type = 'SUBTRACT';
        const a = 6;
        const b = 4;
        const expected = 2;
        const result = calculateNumber(type, a, b);
        assert.strictEqual(result, expected);
    });
    //test suite to test for when the type is DIVIDE
    it('Should correctly divide two numbers when type is DIVIDE', function(){
        const type = 'DIVIDE';
        const a = 10;
        const b = 2;
        const expected = 5;
        const result = calculateNumbe(type, a, b);
        assert.strictEqual(result, expected);
    });
    // test suite for when we are dividing by 0
    it('Should return an error when dividing by 0', function(){
        const type = 'DIVIDE';
        const a = 10;
        const b = 0;
        const expected = 'Error';
        const result = calculateNumber(type, a, b);
        assert.strictEqual(result, expected);
    });
    //test suite for INVALID_TYPE
    it('Should return "Invalid type" for an invalid type', function(){
        const type = 'INVALID_TYPE';
        const a = 10;
        const b = 0;
        const expected = 'Invalid type';
        const result = calculateNumber(type, a, b);
        assert.strictEqual(result, expected);
    });
})
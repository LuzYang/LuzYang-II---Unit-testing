// tests/test.js
const expect = require('chai').expect;
const mylib = require('../mylib');

describe('mylib Arithmetic Module Tests', function() {
    
    // 在所有测试开始前运行
    before(function() {
        console.log(">>> Starting the math test suite...");
    });

    // 在所有测试结束后运行
    after(function() {
        console.log(">>> Math test suite completed.");
    });

    it('should return 8 when adding 5 and 3', function() {
        expect(mylib.add(5, 3)).to.equal(8);
    });

    it('should return 6 when subtracting 4 from 10', function() {
        expect(mylib.subtract(10, 4)).to.equal(6);
    });

    it('should return 42 when multiplying 6 and 7', function() {
        expect(mylib.multiply(6, 7)).to.equal(42);
    });

    it('should return 5 when dividing 20 by 4', function() {
        expect(mylib.divide(20, 4)).to.equal(5);
    });

    
    it('should throw an error when dividing by zero', function() {
        expect(() => mylib.divide(10, 0)).to.throw("ZeroDivisionError: Cannot divide by zero");
    });
});

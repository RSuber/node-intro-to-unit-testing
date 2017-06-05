const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('if a multiple of 3 and 5, return fizz-buzz', function() {
    [15, 30, 45].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('if a multiple of 3, return fizz', function() {
    [3, 6, 9, 12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('if a multiple of 5, return buzz', function() {
    [5, 10, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('if not multiple of 3 or 5, return itself', function() {
    [1, 2, 4, 7].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });

  it('if not a number, return error', function() {
    const badInputs = ['string', [],true,false]
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});

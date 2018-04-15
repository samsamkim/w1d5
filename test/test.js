var assert = require("chai").assert;
var check = require("../luhn");



describe('TrueNumberTesting', function() {
  it('return true if given number is a luhn number', function(){
    var trueNumber = 79927398713;
    assert.isTrue(check(trueNumber));
  });

  it('return false if given number is not a luhn number', function(){
    var falseNumber = 123;
    assert.isFalse(check(falseNumber));
  });

  it('return false if given number is not a number', function(){
    var notANumber = "gs";
    assert.isFalse(check(notANumber));
  });

  it('return true if given number is a luhn number', function(){
    var truenumber = 79927398713;
    assert.isTrue(check(truenumber));
  });


});


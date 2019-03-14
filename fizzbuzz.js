console.log("debuuging exercise");
function FizzBuzz() {

}

FizzBuzz.prototype.play = function(number) {
debugger
  var otherNumber = number;
   // console.log('other:', otherNumber);
  if (this._isDivisibleBy(15, otherNumber)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, otherNumber)) {
    return 'Buzz';
  }
  else if (this._isDivisibleBy(3, otherNumber)) {
    return 'Fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, theNumber) {
  // console.log(theNumber);
  return theNumber % divisor === 0;

}
   // console.log(theNumber);
var fizzBuzz = new FizzBuzz();

for (var i = 1; i < 100; i++) {
  console.log(fizzBuzz.play(i));
}

String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
}

// console.log(3.isPositive()); // this isn't going to work

var a = new Number(3);
console.log(a.isPositive());

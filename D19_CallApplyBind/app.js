var person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function() {

    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;

  }
};

var logName = function(lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments: ' + lang1 + ' ' + lang2);
  console.log('-------------')
}

// Second approach
// var logName = function(lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
// }.bind(person);

var logPersonName = logName.bind(person);

// logName();

logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);

// Second approach
// (function(lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments: ' + lang1 + ' ' + lang2);
//   console.log('-------------')
// }).apply(person, ['es', 'en']);

// Function borrowing
var person2 = {
  firstname: 'Jane',
  lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// Function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2); //  var a = 2
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3); //  var a = 3
console.log(multipleByThree(4));

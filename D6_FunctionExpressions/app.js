greet();

// Function statement
function greet() {
  console.log('Hi');
}

// Function expression
var anonymousGreet = function() {
  console.log('Hi');
};

anonymousGreet();

function log(a) {
  a();
}

log(function() {
  console.log('Hi');
});

// By value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log('a =', a);
console.log('b =', b);

// By reference (all objects (including functions))
var c = { greeting: 'Hi' };
var d;

d = c;
c.greeting = 'Hello';     // mutate

console.log('c =', c);
console.log('d =', d);

// By reference (even as parameters)
function changeGreeting(obj) {
  obj.greeting = 'Hola';  // mutate
}

changeGreeting(d);

console.log('c =', c);
console.log('d =', d);

// Equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };

console.log('c =', c);
console.log('d =', d);

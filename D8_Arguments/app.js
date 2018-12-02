function greet(firstname, lastname, language/* , ...other */) {
  language = language || 'en';  // or in ES6 we can set it as default inside
                                // a function declaration language = 'en'

  if(arguments.length === 0) {
    console.log('Missing parameters!');
    console.log('-------------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg 0:', arguments[0]);
  console.log('-------------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
// greet('John', 'Doe', 'es', '111 Main St.', 'New York');

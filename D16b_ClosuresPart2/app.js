function buildFunctions() {

  var arr = [];

  for (var i = 0; i < 3; i++) {

    // We just push functions into the arr, without invoking them
    // They'll be executed later
    arr.push(
      function() {
        console.log(i);
      }
    );

  }

  return arr;

}

var fs = buildFunctions();

// console.log(fs);

fs[0]();
fs[1]();
fs[2]();

console.log('-------------');

function buildFunctions2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {

      // We now push result of the function into the arr
      // because we're invoking it
      arr.push(
        (function(j) {
            return function(){
              console.log(j);
            }
          }(i))
      );

      // Or we can simply put keyword let (from ES6) instead of var
      // in the for loop at the 1st buildFunctions, and get the same result

    }

    return arr;

}

var fs2 = buildFunctions2();

// console.log(fs2);

fs2[0]();
fs2[1]();
fs2[2]();

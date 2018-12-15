// PRIVATE PROPERTIES & METHODS
// (Hide certain members from the outside)

// HIDE THE DETAILS
// SHOW THE ESSENTIALS

// SCOPE IS TEMPORARY. BUT CLOSURE STAYS THERE.

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; 
  // 'defaultLocation' variable continue stay in memory, after call draw method
  // This will preserve its state, because this is a part of 
  // the closure of draw function.

  let computeOptimumLocation = function(factor) {
    // ...
  } // this variable continue stay in memory, after call draw method

  this.draw = function() {

    // Every time we call the draw method, 
    // x, y variables will be recreated and reinitialized,
    // and then after executing this function, 
    // these variables will die.
    let x, y; // only available in draw method, their scope is limited to draw function.


    // Closure determines what variables will be accessible
    // to an inner function.
    // So, draw method will be able to access all the local variables defined inside
    // as well as the variables defined in its parent function (Circle function).
    computeOptimumLocation(0.1); // CLOSURE

    defaultLocation; // do something with it

    console.log('draw');
  }
}

const circle = new Circle(8);
circle.draw();

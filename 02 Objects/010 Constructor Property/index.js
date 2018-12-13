// EVERY OBJECT has a CONSTRUCTOR PROPERTY,
// and that references the function that was used to create that object.

// FACTORY FUNCTION
function createCircle(radius, x, y) {
  return {
    radius: radius, // WE CAN SIMPLY -> radius,
    location: {
      x: x,
      y // <=> y: y
    },
    draw: function() {
      console.log('Draw');
    }
  };
}

const circle = createCircle(5, 2, 3);
console.log(circle);

// circle.constructor
// ƒ Object() { [native code] }
// This is a built in constructor function in javascript.
// When we create an object using the object literal syntax, internally The javascript engine uses this constructor function, like this:
// let x = {};
// let x = new Object();
// A few other built in constructors:
// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3,...

//----------------------------------------------

// CONSTRUCTOR FUNCTION
// another.constructor
function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x,
    y
  }
  this.draw = function() {
    console.log('Draw');
  }
}

const another = new Circle(3, 2, 2);
console.log(another);
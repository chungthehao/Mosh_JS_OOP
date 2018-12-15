// MULTI-LEVEL Inheritance

let myArray = [];

// Prototype của myArray là "array base" object
console.log(Object.getPrototypeOf(myArray));

// Prototype của "array base" là "object base" (root object)
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myArray)));

// "myArray" object --> "array base" object --> "object base" object

//=================================================

// Còn object mà mình tạo ra từ constructor riêng thì sao?

function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('Draw');
  }
}

// "circle" object --> "circle base" object --> "object base" object
const circle = new Circle(8);

// This prototype is the prototype for all circle objects
// that we create using our Circle Constructor.
console.log(Object.getPrototypeOf(circle)); // "circle base"

// Các objects đc tạo ra từ 1 constructor (ở đây là Circle)
// sẽ có cùng prototype.
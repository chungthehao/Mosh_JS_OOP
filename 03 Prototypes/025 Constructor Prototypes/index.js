// CONSTRUCTOR PROTOTYPES

function Circle(radius) {
  this.radius = radius;
} 

const circle = new Circle(3);

// prototype (or parent of 'circle' object)
console.log(Object.getPrototypeOf(circle));
// it's the same thing
console.log(circle.__proto__); // Sắp bỏ property này, đừng xài


// PROTOTYPE of Circle CONSTRUCTOR
// Là 1 object
// là cha (prototype) của những objects đc tạo ra từ Circle constructor
console.log(Circle.prototype);
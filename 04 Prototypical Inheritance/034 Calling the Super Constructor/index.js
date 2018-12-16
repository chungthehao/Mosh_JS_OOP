// Calling the Super Constructor


function Shape(color) {
  // Mặc định 'this' trong này point tới window/global obj
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}

// - CHÚ Ý DÒNG DƯỚI NÀY:
Circle.prototype = Object.create(Shape.prototype); // Reset the prototype of the Circle
Circle.prototype.constructor = Circle; // Vớt vát lại...

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(2, 'Yellow');

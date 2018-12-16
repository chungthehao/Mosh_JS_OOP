// Intermediate Function Inheritance

function Shape(color) {
  // Mặc định 'this' trong này point tới window/global obj
  this.color = color;
}
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

// Intermediate Function Inheritance là thằng này:
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); 
  Child.prototype.constructor = Child; 
}

function Circle(radius, color) {
  Shape.call(this, color);

  this.radius = radius;
}
extend(Circle, Shape);

Circle.prototype.draw = function() {
  console.log('draw');
}

function Square(size) {
  this.size = size;
}
extend(Square, Shape);

const s = new Shape();
const c = new Circle(2, 'Yellow');
const sq = new Square(99);

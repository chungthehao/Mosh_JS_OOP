// Resetting Constructor

// Bình thường thì:
// new Circle(3) <=> new Circle.prototype.constructor(3)

function Shape() {

}
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

// - CHÚ Ý DÒNG DƯỚI NÀY:
Circle.prototype = Object.create(Shape.prototype); // Reset the prototype of the Circle
Circle.prototype.constructor = Circle; // Vớt vát lại...
// - THẰNG DƯỚI NÀY THÌ KO SAO (vẫn còn constructor property của thằng "circle base")
// Object.setPrototypeOf(Circle.prototype, Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(2);

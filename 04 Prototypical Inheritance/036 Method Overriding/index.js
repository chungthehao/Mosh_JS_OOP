// Method Overriding
// circle object kế thừa duplicate từ "shape base"
// làm sao để override duplicate() ở circle ???

// Intermediate Function Inheritance là thằng này:
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); 
  Child.prototype.constructor = Child; 
}

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
extend(Circle, Shape);

// phải nằm sau extend(Circle, Shape), nằm trc bị reset mất ráng chịu!
Circle.prototype.draw = function() {
  console.log('draw');
}
// phải nằm sau extend(Circle, Shape), nằm trc bị reset mất ráng chịu!
Circle.prototype.duplicate = function() {
  // Kế thừa từ thằng cha (nếu cần) như sau:
  Shape.prototype.duplicate.call(this);

  // Những logic của con
  console.log('duplicate circle');
}

function Square(size) {
  this.size = size;
}
extend(Square, Shape);

const s = new Shape();
const c = new Circle(2, 'Yellow');
const sq = new Square(99);

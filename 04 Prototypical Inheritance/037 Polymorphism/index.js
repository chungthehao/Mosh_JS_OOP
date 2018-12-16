// POLYMORPHISM

// Shape có duplicate()
// Shape có 2 con: Circle và Square
// Circle và Square cũng có duplicate() riêng (override)
// -------> Có nhiều Implementation của duplicate()
// -------> Có nhiều form of the duplicate() method
// =======> Polymorphism

// Intermediate Function Inheritance là thằng này:
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); 
  Child.prototype.constructor = Child; 
}

function Shape() {}
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}
extend(Circle, Shape);
// phải nằm sau extend(Circle, Shape), nằm trc bị reset mất ráng chịu!
Circle.prototype.duplicate = function() {
  console.log('duplicate circle');
}

function Square() {}
extend(Square, Shape);
Square.prototype.duplicate = function() {
  console.log('duplicate square');
}

const shapeArr = [
  new Circle(),
  new Square()
];

for (shape of shapeArr)
  shape.duplicate(); // Cùng là 1, nhưng tùy obj sẽ khác!


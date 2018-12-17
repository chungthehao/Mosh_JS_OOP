// MODULES

const _radius = new WeakMap(); // Xài trong class Circle để implement private property.
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

const c = new Circle(9);

// Private, vẫn lấy đc radius!!! (bằng cách sau)
// Chuyển class Circle thành 1 module, ẩn hết đi
// sẽ thành private thật!
// ---> Abstraction (like a DVD player)
console.log(_radius.get(c));

c.draw();
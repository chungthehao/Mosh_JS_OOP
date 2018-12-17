// Implementation Detail (should be hidden)
const _radius = new WeakMap(); // Private property

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}

// module.exports là 1 object
// - Nhiều class ở module:
// Khi cần xài ở đâu, import object này vào, rồi
// truy xuất các properties sẽ đc các class cần xài.
// - Khi chỉ có 1 class ở module:
// Có thể đơn giản lại là gán luôn object này thành class cần 

// - TH nhiều class
// module.exports.Circle = Circle;
// module.exports.Square = Square;
// ...

// - TH 1 class
module.exports = Circle; // gán bằng Circle class
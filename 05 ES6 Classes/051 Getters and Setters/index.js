// GETTERS & SETTERS

const _radius = new WeakMap();

class Circle {

  constructor(radius) {
    _radius.set(this, radius);

    // Cách 2: Lấy bằng cách .radius (cũ)
    // Object.defineProperty(this, 'radius', {
    //   get: function() {
    //     return _radius.get(this);
    //   }
    // });
  }

  // Cách 1: lấy private property qua method
  getRadius() {
    return _radius.get(this);
  }

  // Cách 3: Lấy bằng cách .radius (mới ES6), thêm từ khóa get, đặt tên là 'radius'
  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    // Some validation
    if (value <= 0) throw new Error("radius phai la so DUONG");

    _radius.set(this, value);
  }

}

const c = new Circle(8);
// Static Methods

// - In classical object oriented languages,
// we have 2 types of methods:
// Instance Methods & Static Methods
// - Instance methods: instance obj xài đc
// - Static methods: xài trong class của nó thôi

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  // và nó sẽ available trong 1 instance obj
  draw() {

  }

  // Static Method 
  // (to create ultility functions that are not tied to a particular object)
  // Ultility Functions that takes an input and returns something (vd: Math.min(), Math.sin(),...)
  // Giả sử mình có 1 chuỗi có dạng JSON
  // và mình sẽ tạo ra obj từ thông tin radius
  // trong chuỗi đó.
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// c = new Circle(1); // c là 1 instance object
c = Circle.parse('{ "radius": 8 }');
console.log(c);
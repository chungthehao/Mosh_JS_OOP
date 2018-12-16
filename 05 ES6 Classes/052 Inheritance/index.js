// INHERITANCE

// Làm sao để Circle kế thừa Shape?

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape { // Khỏi phải set lại prototype... quá nhẹ nhàng
  constructor(color, radius) {
    super(color); // Must have, vì cha có

    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('purple', 22);
console.log(c);
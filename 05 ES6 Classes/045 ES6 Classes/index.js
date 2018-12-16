// ES6 Classes

// - CÁCH DÙNG CONSTRUCTOR -
// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function() {
//     console.log('draw');
//   }
// }

// - CÁCH DÙNG CLASSES -
// (just syntactic sugar)
class Circle {
  constructor(radius) {
    this.radius = radius;

    this.move = function() {}
  }

  // draw sẽ ở prototype
  draw() {
    console.log('draw');
  }
}

const c = new Circle(1);
console.log(c);
console.log('Type of Circle class: ', typeof Circle);
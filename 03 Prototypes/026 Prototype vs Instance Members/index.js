// PROTOTYPE vs INSTANCE MEMBERS

// Mình có 2 loại properties và methods trong JS:
// - Instance properties and methods (instance members) (vd: radius)
// - Prototype members (vd: draw())

function Circle(radius) {
  this.radius = radius;

  // Chuyển lên "circle base" object
  // this.draw = function() {
  //   console.log('draw');
  // }

  this.move = function() {
    console.log('move');

    // có thể xài đc prototype members (vd: shift)
    this.shift();
  }
} 

// Mình có 1000 objects từ Circle constructor thì
// sẽ có 1000 phiên bản draw method in memory.
// Vậy, làm thế nào để cải thiện???
const c1 = new Circle(3);
const c2 = new Circle(6);

// Đưa draw method vô "circle base" object
// Chính là:
// - c1.__proto__
// - c2.__proto__
// - Circle.prototype

Circle.prototype.draw = function() {
  console.log('draw');

  // có thể xài method ở instance (move)
  this.move();
}

Circle.prototype.shift = function() {
  console.log('shift');
}

//----------------------------

// Implement một method toString() khác, overwrite cái có sẵn
Circle.prototype.toString = function() {
  return 'Circle with radius ' + this.radius;
}
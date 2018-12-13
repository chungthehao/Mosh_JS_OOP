// IN JAVASCRIPT, FUNCTIONS are OBJECTS

// CONSTRUCTOR FUNCTION
function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x,
    y
  }
  this.draw = function() {
    console.log('Draw');
  }

  // Nhớ
  return this; 
  // Nếu dùng Circle.call({}, 3, 2, 4);
  // hay dùng Circle.apply({}, [3, 2, 4]);
}

// Circle function is an object
// it has some properties and methods:
// Circle.name
// Circle.(apply, bind, call)
// Circle.constructor
// ƒ Function() { [native code] }

const another = new Circle(3, 2, 2);
// <=>
// const another2 = Circle.call({}, 3, 2, 4);
const another3 = Circle.apply({}, [3, 2, 4]);
console.log(another);
console.log(another3);

//----------------------------------------------------

const Circle1 = new Function('radius', 'x', 'y',
  `
    this.radius = radius;
    this.location = {
      x,
      y
    }
    this.draw = function() {
      console.log('Draw');
    }
  `
);

const newCircle = new Circle1(4, 5, 6);
console.log(newCircle);
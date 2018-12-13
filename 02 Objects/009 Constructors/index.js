
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
}

const circle = new Circle(3, 2, 2);
console.log(circle);
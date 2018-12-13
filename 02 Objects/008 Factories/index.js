
// Creating objects with the object literal syntax is an issue only if that object has a behavior (method).

// Duplicate methods again and again, what if an object has 100 methods and some method have bugs?!
const circle1 = {
  radius: 1,
  location: {
    x: 2,
    y: 8
  },
  draw: function() {
    console.log('Draw');
  }
};

const circle2 = {
  radius: 3,
  location: {
    x: 9,
    y: 1
  },
  draw: function() {
    console.log('Draw');
  }
};

//--------------------------------------------

// FACTORY FUNCTION
function createCircle(radius, x, y) {
  return {
    radius: radius, // WE CAN SIMPLY -> radius,
    location: {
      x: x,
      y // <=> y: y
    },
    draw: function() {
      console.log('Draw');
    }
  };
}

const circle3 = createCircle(5, 2, 3);
console.log(circle3);
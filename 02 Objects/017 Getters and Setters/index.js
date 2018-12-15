// GETTERS & SETTERS

// GETTERS: display private member somewhere else in the application, but can not modify it, just read it.

// SETTERS: allow set a value from outside to a private member

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; 
  // Cách 1
  this.getDefaultLocation = function() {
    return defaultLocation;
  }
  // Cách 2
  // param1: object nào muốn thêm property
  // param2: tên property muốn thêm
  // param3: 1 object với get method, đn giá trị trả về
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },

    set: function(valueOutside) {
      // Some Validation
      if ( ! valueOutside.x || ! valueOutside.y)
        throw new Error('Khong hop le.');

      defaultLocation = valueOutside;
    }
  });

  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(8);
circle.draw();

// Cách 1
console.log(circle.getDefaultLocation());
// Cách 2
console.log(circle.defaultLocation);

circle.defaultLocation = 1; //{ x: 2, y: 8 };
console.log(circle.defaultLocation);
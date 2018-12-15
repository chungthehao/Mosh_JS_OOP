// ITERATING PROPERTIES

function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log('move');
  }
} 

const c1 = new Circle(3);
const c2 = new Circle(6);

// c1.draw(); // ko đc, vì chưa có

Circle.prototype.draw = function() {
  console.log('draw');
}

// Dù đã khởi tạo trước khi có draw() 
// because we're dealing with object references
// nên bất cứ khi nào đc gán là nó sẽ xài đc liền ngay sau đó.
c1.draw();


// Liệt kê các properties, methods (instance & prototype)

// Returns instance members
console.log(Object.keys(c1)); // only return instance members

// Returns all members (instance(own) + prototype)
for (const key in c1) console.log(key);

// c1.hasOwnProperty('radius')
// true

// c1.hasOwnProperty('draw')
// false
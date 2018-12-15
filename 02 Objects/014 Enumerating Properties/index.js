
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(8);

// Liệt kê tất cả các property/method, value trong 1 object
for (const key in circle) {
  console.log(key, circle[key], '~~~', typeof circle[key]); // ko thể dùng dot notation: circle.key (nó ko hiểu key là biến, mà hiểu là 1 property có tên là key --> đâu có đâu --> trả về undefined).
}

// Lấy tất cả các property/method của 1 object cho vào 1 array
const keysArr = Object.keys(circle);
console.log(keysArr);

// Kiểm tra xem 1 object có 1 property/method nào đó ko?
if ('radius' in circle)
  console.log('circle has a radius.');
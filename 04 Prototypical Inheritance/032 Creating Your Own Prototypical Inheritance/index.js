// Creating your own prototypical inheritance

function Shape() {

}
Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}
// Cách 1 ở dưới thì để draw đây cũng đc
// Circle.prototype.draw = function() {
//   console.log('draw');
// }

// Thay đổi cái mặc định: "circle base" inherits from "object base",
// thành: "circle base" inherits from "shape base"
let circleBase = Circle.prototype;
console.log(Object.getPrototypeOf(circleBase)); // Object base
// Cách 1 (an toàn hơn)
Object.setPrototypeOf(circleBase, Shape.prototype);
// Cách 2 (danger !)
// Circle.prototype = Object.create(Shape.prototype); // tạo ra 1 object MỚI inherits from "shape base"
console.log(Object.getPrototypeOf(Circle.prototype)); // Shape base

// VỚI CÁCH 2 thì phải để draw sau nó (cách 1 vẫn ok), c1,2 đều để đây đc
Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(2);

// Đưa vô Shape
// Circle.prototype.duplicate = function() {
//   console.log('duplicate');
// }


// Nếu sau này có nhu cầu cần Square,
// ko muốn phải định nghĩa lại duplicate method
// y chang như của Circle
// tức là: ko muốn như sau...
// function Square() {
//   //...
// }

// Square.prototype.duplicate = function() {
//   console.log('duplicate');
// }

//------> Định nghĩa Shape, đưa duplicate() vô,
// khi đó, Circle, Square,... sẽ kế thừa từ Shape

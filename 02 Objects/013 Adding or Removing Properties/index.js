
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const circle = new Circle(8);

// Object trong javascript thì dynamic
// Sao khi tạo object ra rồi thì có thể thêm / xóa property
// bất cứ khi nào cần mà không cần phải khai báo trước trong
// class (trong javascript thực sự ko tồn tại class).

// Cách 1
// circle.location = {
//   x: 1,
//   y: 2
// };

// Cách 2
circle['location'] = {
  x: 3,
  y: 7
};

// Khi chưa biết trước tên property thì lưu trong biến
// rồi dùng cách 2
// let propertyName = "its location";
// circle[propertyName] = {
//   x: 11,
//   y: 22
// };

console.log(circle);

//-------------------------------------

// Xóa property, dùng 'delete' operator

// Cách 1
// delete circle.location;

// Cách 2
delete circle['location'];

console.log(circle);
// COMMONJS MODULES (node)
// Chạy bằng terminal ở thư mục này "node index.js"

// import circle module
const Circle = require('./circle');

const c = new Circle(9);
// console.log(_radius.get(c)); // ko truy xuất đc, vì module chỉ exports đúng class Circle thôi!!!
c.draw();
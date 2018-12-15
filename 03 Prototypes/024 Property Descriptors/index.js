// PROPERTY DESCRIPTORS

let person = { name: 'Henry' };

console.log(person);

// Liệt kê tất cả các properties / methods
// C1:
for (const key in person) {
  console.log(key); // chỉ có 'name', ko có toString(), ...
}
// C2:
let keys = Object.keys(person);
console.log(keys); // chỉ có ["name"]

// NONE of the properties and methods defined in "object base"
// are visible here.

// ===> TẠI SAO mình ko thể liệt kê ra các properties, methods
// được đn ở "object base" ???
// ------
// ===> Trong JS properties / methods có attributes kèm theo
// Các attributes này có thể cho phép (hay ko) việc:
// - Liệt kê (enumerable)
// - Chỉnh sửa (configurable): Xóa đc,...
// - thay đổi giá trị (writable): overwrite, can change its implementation, can set its value
// - get, set cũng là attributes


let objectBase = Object.getPrototypeOf(person);

// Show ra attributes của toString() method
// Trả về 1 object gọi là property descriptor
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);

//--------------------------

// Khi mình tạo object riêng, cũng có thể cài đặt attributes 
// cho các properties / methods của mình bằng cách

// param1: đối tượng cần thao tác với
// param2: the name of the target property cần thao tác với
// param3: property descriptor object
Object.defineProperty(person, 'name', {
  writable: false, // become read only if false
  enumerable: false, // ko liệt kê ra if false (khi for-in hoặc Object.keys(person))
  configurable: false // ko xóa đc,... if false
});

person.name = 'Ma Lau';

delete person.name;

console.log(person);


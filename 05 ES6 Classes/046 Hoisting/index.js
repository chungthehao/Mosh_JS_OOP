// HOISTING

//sayGoodbye(); // invalid, ko đc xài trc khi khai báo
// console.log(number); // invalid, ko đc xài trc khi khai báo

sayHello(); // absolutely valid

// Function Declaration
function sayHello() {}

// Function Expression
const sayGoodbye = function() {}; // function (object)

const number = 1; // primitive

//----------------------------------------

//const c = new Circle(); // !!! invalid, unlike function

const sq = new Square(); // invalid

// Class Declaration
class Circle {

}

// Class Expression
const Square = class {

}
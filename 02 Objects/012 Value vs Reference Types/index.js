// PRIMITIVE & REFERENCE TYPES

// PRIMITIVES ARE COPIED BY THEIR VALUE (number, string, boolean, symbol, undefined, null).
// OBJECTS ARE COPIED BY THEIR REFERENCE (function, array, object).

// x, y are 2 primitives.
// x and y are two independent variables.
let x = 11; // This value (11) that we have here is stored inside of this variable ('x')
let y = x; // When we copy that variable, that value that is stored in the variable is copied into the new variable ('y').

x = 33;

// console.log('x: ', x);
// console.log('y: ', y);

//----------------------------------------

// { value: 11 } is not stored in 'a' variable, it's stored somewhere else in the memory
// and address of that memory location is stored inside 'a' variable
let a = { value: 11 };
let b = a; // the address (the reference) will be copy

a.value = 33;

// x & y are pointing to the same object in memory!!!
// console.log('a: ', a);
// console.log('b: ', b);

//============================================================

let number = 9;

// the value (9) of "number" is copied into 
// "number" parameter (that is local in increase function).
function increase(number) {
  number++;
}

increase(number);

console.log(number);

//-----------------------------------------

let obj = { value: 9 }; // obj chứa địa chỉ của đối tượng { value: 9 } 

function increase(obj) { // cũng là 1 biến mới, nhưng cùng trỏ tới cùng 1 vùng nhớ (vì địa chỉ đc copy)
  obj.value++;
}

increase(obj);
// 2 variables are pointing to the same object in memory
console.log(obj);
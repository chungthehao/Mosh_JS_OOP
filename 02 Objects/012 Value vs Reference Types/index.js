// PRIMITIVE & REFERENCE TYPES

// x, y are 2 primitives.
// x and y are two independent variables.
let x = 11;
let y = x;

x = 33;

console.log('x: ', x);
console.log('y: ', y);

//--------------------------------------------

// {value: 11} does not store in 'a' variable, store somewhere else in the memory
// {value: 11}'s address stores in 'a' variable
let a = { value: 11 };
let b = a;

a.value = 33;

console.log('a: ', a);
console.log('b: ', b);
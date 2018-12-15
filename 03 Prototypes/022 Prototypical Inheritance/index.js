// PROTOTYPICAL Inheritance
// (prototype ~ parent)

// A PROTOTYPE is JUST A REGULAR OBJECT!

// Trong JavaScript, mình ko có classes chỉ có objects
// So how can we implement inheritance only using objects.

// We can define another object (A), and put all the common behavior or all the common methods in this object,
// and then somehow we can link our objects to this object (A)
// we refer to the A object as the prototype of the objects

// So a prototype is essentially the parent of another object

let x = {};
console.log(x);

// x có prototype là "object base" (root object),
// "object base" là thằng bự nhất, nó ko có cha, ko có prototype

// 1 cách khác để show ra prototype của x (tr hợp này là "object base") mà khỏi nhấp vô "__proto__" property ở console
console.log(Object.getPrototypeOf(x));
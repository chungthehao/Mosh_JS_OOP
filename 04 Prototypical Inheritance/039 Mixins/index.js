// MIXINS

// Defining one feature as an object!

function mixin(targetObj, ...sources) { // rest operator, collect tất cả các param từ 2 trở đi, thành 1 array
  Object.assign(targetObj, ...sources); // spread operator, lấy nội dung bên trong array ra.
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('Eating');
  }
};

const canWalk = {
  walk: function() {
    console.log('Walking');
  }
};

const canSwim = {
  swim: function() {
    console.log('Swimming');
  }
}

function Person() {
  this.hunger = 10;
}

// tham số thứ 1: obj đích cần đc add thêm...
// tham số thứ 2, 3,... những obj nguồn
const person1 = Object.assign({}, canEat, canWalk);
console.log(person1);

Object.assign(Person.prototype, canEat, canWalk);
person2 = new Person();
console.log(person2);

function GoldFish() {}
// Object.assign(GoldFish.prototype, canEat, canSwim);
mixin(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);
// PRIVATE PROPERTIES USING SYMBOLS

// Lẽ ra radius của hình tròn là public
// mà trong bài này, giả sử nó cần private
// thì ta cần làm gì???

// Every time we call the Symbol() function,
// we get a new unique value

const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    // this['radius'] = radius; // y như cái trên

    this[_radius] = radius;
  }

  // computed property names,
  // trong [] là expression
  // khi expression đó đc evaluated
  // kết quả trả về sẽ đc dùng làm tên
  [_draw]() {
    
  }
}

const c = new Circle(1);
console.log(c);

console.log(Object.getOwnPropertyNames(c)); // mảng rỗng, vì ko có regular properties

console.log(Object.getOwnPropertySymbols(c));
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
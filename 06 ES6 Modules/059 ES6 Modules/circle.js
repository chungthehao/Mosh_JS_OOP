// Mặc định trong này private hết
// Chỉ thằng nào 'export' thì mới public thôi

const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}
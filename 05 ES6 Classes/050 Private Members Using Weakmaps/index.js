// PRIVATE MEMBERS USING WEAKMAPS


const _radius = new WeakMap(); // demo property
const _move = new WeakMap(); // demo method

class Circle {

  constructor(radius) {
    // this.radius = radius; //public

    _radius.set(this, radius); // private property

    _move.set(this, () => {
      console.log('move', this);
      // this ở đây là undefined, vì trong class, chạy strict mode
      // vậy nếu trong move method, muốn xài circle obj đang thực thi thì sao???
      // Xài arrow function (this trong arrow function là this của thằng chứa nó)
    }); // private method
  }

  draw() {
    // Giả sử muốn xài private property trong class
    // có thể lấy đc bằng:
    // _radius.get(this), in ra cho coi
    // console.log(_radius.get(this));

    // Giả sử muốn xài private method trong class
    // _move.get(this) trả về 1 func, rồi call
    _move.get(this)();

    console.log('draw');
  }
}

const c = new Circle(3);
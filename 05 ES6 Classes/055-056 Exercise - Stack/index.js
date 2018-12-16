// STACK

const _count = new WeakMap(); // private, ko cần thiết, có thể dùng length trực tiếp, cứ để cho thấy cú pháp thế nào thôi.
const _stack = new WeakMap(); // private
class Stack {
  constructor() {
    _count.set(this, 0);

    _stack.set(this, []);
  }

  get count() {
    return _count.get(this);
  }

  push(item) {
    _stack.get(this).push(item);

    const tmp = _count.get(this);
    _count.set(this, tmp+1);

  }

  pop() {
    const count = _count.get(this);

    if (count === 0)
      throw new Error('Co dau ma pop!');

    _count.set(this, count-1);

    return _stack.get(this).pop();
  }

  peek() {
    if (_count.get(this) === 0)
      throw new Error('Co dau ma peek!');

    const stack = _stack.get(this);

    return stack[stack.length-1];
  }
}

s = new Stack();
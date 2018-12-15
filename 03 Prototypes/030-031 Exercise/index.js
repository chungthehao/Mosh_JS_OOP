
// Constructor này ko cần thiết phải tối ưu
// Vì thực tế nó ko có nhiều
// tối ưu xàm, ảnh hưởng nguyên abstraction
// gây ra những dư thừa vớ vẩn

function Stopwatch() {

  let duration = 0;

  let status = 0; // chưa chạy

  let myTimer = null;

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });
  Object.defineProperty(this, 'status', {
    get: function() {
      return status;
    },
    set: function(value) {
      status = value;
    }
  });
  Object.defineProperty(this, 'myTimer', {
    get: function() {
      return myTimer;
    },
    set: function(value) {
      myTimer = value;
    }
  });

}

Stopwatch.prototype.increase = function() {
  this.duration = this.duration + 0.01;
}

Stopwatch.prototype.start = function() {
  if (this.status === 1)
    throw new Error('Đang chạy rồi cha nội!!!'); 

  this.myTimer = setInterval(this.increase.bind(this), 10);

  this.status = 1; // chạy
};

Stopwatch.prototype.stop = function() {
  if (this.status === 0)
    throw new Error('Đã dừng rồi cha nội!!!'); 

  clearInterval(this.myTimer);

  this.status = 0; // dừng
};

Stopwatch.prototype.reset = function() {
  if (this.status === 1)
    throw new Error('Đang chạy mà reset gì!!!'); 

  this.duration = 0;
};
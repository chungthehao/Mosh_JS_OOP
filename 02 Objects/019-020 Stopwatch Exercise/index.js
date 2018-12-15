
function Stopwatch() {

  let duration = 0;

  let status = 0; // chưa chạy

  let myTimer;

  let increase = function() {
    // console.log(this);
    // 'this' trong này là window object nha ku!
    duration += 0.01;
  }

  this.start = function() {
    if (status === 1)
      throw new Error('Đang chạy rồi cha nội!!!'); 

    myTimer = setInterval(increase, 10);

    status = 1; // chạy
  };

  this.stop = function() {
    if (status === 0)
      throw new Error('Đã dừng rồi cha nội!!!'); 

    clearInterval(myTimer);

    status = 0; // dừng
  };

  this.reset = function() {
    if (status === 1)
      throw new Error('Đang chạy mà reset gì!!!'); 

    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration.toFixed(2);
    }
  });

}
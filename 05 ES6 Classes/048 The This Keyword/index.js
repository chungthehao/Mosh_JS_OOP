// 'use strict'

// The 'this' keyword

const Circle = function() {

  this.draw = function() { console.log(this) };

}

const c = new Circle();
// Method call (gọi method từ c obj)
c.draw();

const draw = c.draw; // not call, just getting a reference to draw() method
console.log(draw);

// Function call
draw(); // will see the 'window' obj (undefined nếu use strict mode)

//----------------------------------------

// Mặc định trong body của class
// chạy ở chế độ strict
class Square {
  
  move() {
    console.log(this);
  }

}

const sq = new Square();
const move = sq.move;
move(); // will get 'undefined'
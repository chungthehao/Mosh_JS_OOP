// METHOD OVERRIDING

// Rewriting a member in child class

class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape { 
  move() {
    // Muốn kế thừa cha?
    super.move();

    console.log('circle move');
  }
}

const c = new Circle();
console.log(c);
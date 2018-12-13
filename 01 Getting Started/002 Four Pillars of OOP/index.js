
// PROCEDURAL
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// OBJECT-ORIENTED WAY
let employee1 = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
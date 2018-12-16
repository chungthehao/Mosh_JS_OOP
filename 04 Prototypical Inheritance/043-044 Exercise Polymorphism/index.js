// Exercise - Polymorphism

// Con 1
function HtmlSelectElement(itemsArr = []) {
  this.items = itemsArr;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(value) {
    this.items = this.items.filter(item => item !== value);
  }

  this.render = function() {
    // let tmp = this.items
    // .map(function(item) {
    //   return `<option>${item}</option>`;
    // })
    // .reduce(function(result, ele) {
    //   return result + ele;
    // });
    
    // return `<select>${tmp}</select>`;

    return `<select>\n${this.items.map(item => `  <option>${item}</option>`).join('\n')}
</select>`;
  }
}
// Con 2
function HtmlImageElement(src = '') {
  this.src = src;

  this.render = function() {
    return '<img src="' + this.src + '" />';
  }
}
// Cha
function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  }
}
HtmlElement.prototype.focus = function() {
  console.log('focused');
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// const s = new HtmlSelectElement([1, 2, 3]);
// console.log(s.render());

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('https://')
];

for (element of elements)
  console.log(element.render());
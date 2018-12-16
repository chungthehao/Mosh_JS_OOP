// Exercise Prototypical Inheritance

// HtmlElement (parent)
// HtmlSelectElement (child) // dropdown list

// Con
function HtmlSelectElement(itemsArr = []) {
  this.items = itemsArr;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(value) {
    this.items = this.items.filter(item => item !== value);
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

const s = new HtmlSelectElement();
console.log(s);

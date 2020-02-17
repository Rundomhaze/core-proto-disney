// Обычная резиновая утка.
const RubberDuck = function(name) {
  this.name = name;
  this.color = 'yellow';
}

RubberDuck.prototype.say = function() {
  return `Quack, I am ${this.name}`;
}


const FireRubberDuck = function(name, color, category) {
  // Пердача всех аргументов в конструктор родителя
  RubberDuck.call(this, name);  
  // запись новых свойств
  this.color = color;
  this.category = category;
};
FireRubberDuck.prototype = Object.create(RubberDuck.prototype);

Object.defineProperty(FireRubberDuck.prototype, 'constructor', { 
  value: FireRubberDuck, 
  enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
  writable: true });



// console.log(new);


const EinsteinRubberDuck = function(name, color, category) {
  // Твой код тут.
};

const DJRubberDuck = function(name, color, category) {
  // Твой код тут.
};

const frd = new FireRubberDuck('Steve', 'red', 'evil duck');

console.log(frd);
console.log(frd.say());

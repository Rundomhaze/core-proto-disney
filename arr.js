
// task 1 - prototype
Array.prototype.toString = function () {
  let str = ''
  for (let i = 0; i < this.length; i++) {
    str += `🧜  ID: ${i} 👉  Cartoon: ${this[i]} 🧚\n`;
  }
  return str;
}

let a = ['Duck Stories', 'Mikey Mouse', 'Aladdin', 'Toy Story', 'Chip \'n\' Dale'];
console.log(
  a.toString()
);

// task 2 - proto

const disneyCartoon = function (title, year) {
  this.__proto__ = {
    studio: 'Disney',
    forChildren: true,
  };
  this.title = title;
  this.year = year;
}

const duckStories = new disneyCartoon('duck stories', 1990)
console.log('obj\n', duckStories);
console.log('obj.__proto__\n', duckStories.__proto__);

// добавить мультик

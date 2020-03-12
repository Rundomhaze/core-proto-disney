// task 1 - prototype
// Array.prototype.toString = function () {
//   let str = ''
//   for (let i = 0; i < this.length; i++) {
//     str += `🧜  ID: ${i} 👉  Cartoon: ${this[i]} 🧚\n`;
//   }
//   return str;
// }

// let a = ['Duck Stories', 'Mikey Mouse', 'Aladdin', 'Toy Story', 'Chip \'n\' Dale'];
// console.log(
//   a.toString()
// );


// task 2 - proto

const disneyCartoon = function (title, year) {
  this.__proto__.studio = 'Disney';
  this.__proto__.forChildren = true;
  this.title = title;
  this.year = year;
  console.log(this.__proto__);
}

disneyCartoon.prototype.welcome = function () {
  console.log('Welcome to Disney studio!');
}

const duckStories = new disneyCartoon('duck stories', 1990)

duckStories.welcome();



// console.log('obj\n', duckStories);
// console.log('obj.__proto__\n', duckStories.__proto__);
// console.log('obj.__proto__\n', duckStories.__proto__.__proto__);
// console.log('obj.__proto__\n', duckStories.__proto__.__proto__.__proto__);
// console.log('obj.__proto__\n', duckStories.__proto__);
// console.log(duckStories.studio);

// добавить мультик

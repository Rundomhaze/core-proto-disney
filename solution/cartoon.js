/**
 * Мульт.
 * @param {*} title 
 * @param {*} year 
 * @param {*} forChildren 
 */
const Cartoon = function (title, year, forChildren) {
  this.title = title;
  this.year = year;
  this.forChildren = true;

}

Cartoon.prototype.getDescription = function () {
  const description = Object.entries(this).reduce(
    (desc, entry) => desc + `${entry[0]}:  ${entry[1]}\n`, ''
  );
  return description;
}

// Cartoon.prototype.play = function () {
//   return `Let me tell you a story about ${this.title}, my dear child...`;
// }

Cartoon.prototype.play = function () {
  
  return [
    ' '.repeat(Math.floor(this.studio.length/3)) + this.logo,
    this.studio,
  '-'.repeat(this.studio.length + 4),
    this.title,
  '-'.repeat(this.title.length + 4),
    this.beginning,
  ].join('\n');
}



/**
 * Мульт студии Walt Disney.
 * @param {*} title 
 * @param {*} year 
 */
const DisneyCartoon = function (title, year) {
  Cartoon.apply(this, arguments); // Вызов родительского конструктора
  this.studio = 'Walt Disney';
  this.logo = '🏰🌠';
  this.beginning = 'Long, long ago in a faraway land...';
}

//  Наследование.
DisneyCartoon.prototype = Object.create(Cartoon.prototype); // new Cartoon();
DisneyCartoon.prototype.constructor = DisneyCartoon;

// DisneyCartoon.prototype.play = function () {
//   return `
//       ${this.logo}
//   ${this.studio}
// ${'-'.repeat(this.studio.length + 4)}
  
//   ${this.title}

// ${'-'.repeat(this.title.length + 4)}
//   ${this.beginning}`;
// }


/**
 * Мульт студии DreamWorks.
 * @param {*} title 
 * @param {*} year 
 */
const DreamWorksCartoon = function (title, year) {
  Cartoon.apply(this, arguments); // Вызов родительского конструктора
  this.forChildren = false;
  this.studio = 'DreamWorks';
  this.logo = '🎣🌙';
  this.beginning = 'Long, long ago in a faraway land...';
}

//  Наследование.
DreamWorksCartoon.prototype = Object.create(Cartoon.prototype); // new Cartoon();
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;

// DreamWorksCartoon.prototype.play = function () {
  
//   return [
//     ' '.repeat(Math.floor(this.studio.length/3)) + this.logo,
//     this.studio,
//   '-'.repeat(this.studio.length + 4),
//     this.title,
//   '-'.repeat(this.title.length + 4),
//     this.beginning,
//   ].join('\n');
// }



const theLittleMermaid = new DisneyCartoon('The Little Mermaid 🧜', 1989);

// console.log(theLittleMermaid);

console.log(
  theLittleMermaid.play()
);



const kungFuPanda = new DreamWorksCartoon('Kung Fu Panda 🐼', 2008);
kungFuPanda.beginning = 'Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...';

// console.log(kungFuPanda);

// console.log(
//   kungFuPanda.play()
// );


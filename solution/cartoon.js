/**
 * Мульт.
 * @param {*} title 
 * @param {*} year 
 * @param {*} forChildren 
 */
const Cartoon = function (title, year, forChildren=true, beginning) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
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
    ' '.repeat(Math.floor(this.studio.length/3)) + this.studioLogo,
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
const DisneyCartoon = function (title, year, forChildren, beginning) {
  Cartoon.apply(this, arguments); // Вызов родительского конструктора
  this.studio = 'Walt Disney';
  this.studioLogo = '🏰🌠';
  this.beginning = beginning || 'Long, long ago in a faraway land...';
}

//  Наследование.
DisneyCartoon.prototype = Object.create(Cartoon.prototype); // new Cartoon();
DisneyCartoon.prototype.constructor = DisneyCartoon;



/**
 * Мульт студии DreamWorks.
 * @param {*} title 
 * @param {*} year 
 */
const DreamWorksCartoon = function (title, year, forChildren, beginning) {
  Cartoon.apply(this, arguments); // Вызов родительского конструктора
  this.studio = 'DreamWorks';
  this.studioLogo = '🌙';
  this.beginning = beginning || 'Long, long ago in a faraway land...';
}

//  Наследование.
DreamWorksCartoon.prototype = Object.create(Cartoon.prototype); // new Cartoon();
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;


// -----------------------


// const theLittleMermaid = new DisneyCartoon('The Little Mermaid 🧜', 1989);

// // console.log(theLittleMermaid);

// console.log(
//   theLittleMermaid.play()
// );



// const kungFuPanda = new DreamWorksCartoon(
//   'Kung Fu Panda 🐼', 
//   2008,
//   'Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...'
//   );

// kungFuPanda.beginning = 'Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...';

// console.log(kungFuPanda);

// console.log(
//   kungFuPanda.play()
// );


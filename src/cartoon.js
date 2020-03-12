/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}

Cartoon.prototype.getDescription = function () {
  return Object.entries(this);
};

Cartoon.prototype.play = function () {
  return [
    this.studio,
    this.title,
    this.beginning,
  ].join('\n');
};


/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(title, year, forChildren, beginning) {
  this.title = title;
  this.year = year;
  this.beginning = beginning;
  this.studio = 'Walt Disney';
}

/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(title, year, forChildren, beginning) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.studio = 'DreamWorks';
}

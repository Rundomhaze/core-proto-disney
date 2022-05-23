/**
 * Человек.
 * @param {string} name
 */

const {
  Cartoon,
  DisneyCartoon,
  DreamWorksCartoon }
  = require('../src/cartoon')

function Person(name, watchedMovies) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = function () {
    return watchedMovies.map((el, ind) => `${ind + 1} ${el.title}`)
      .join('\n');
  }
};

Person.prototype.watchMovie = function (movie) {
  movie.play();
  if (!this.watchedMovies.includes(movie)) {
    this.watchedMovies.push(movie)
  };
};

module.exports = { Person };

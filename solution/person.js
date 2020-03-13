function Person(name, watchedMovies = []) {
  this.name = name;
  this.watchedMovies = watchedMovies;
  this.watchedMovies.toString = this.getWatchedMovies.bind(this);
}

Person.prototype.watchMovie = function(movie) {
  movie.play();
  if (
    this.watchedMovies.find(watched => watched.title === movie.title) ===
    undefined
  ) {
    this.watchedMovies.push(movie);
  }
};

Person.prototype.getWatchedMovies = function() {
  console.log(this);

  let moviesList = [];
  for (let i = 0; i < this.watchedMovies.length; i++) {
    moviesList.push(
      `🧜  ID: ${i + 1} 👉  Cartoon: ${this.watchedMovies[i].title} 🧚`
    );
  }
  return moviesList.join("\n");
};

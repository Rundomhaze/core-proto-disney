

// task 1 - prototype

function Person(name, watchedMovies = []) {
  this.name = name;
  this.watchedMovies = watchedMovies;
}

Person.prototype.watchMovie = function (movie) {
  console.log(
    movie.play()
  );
  this.watchedMovies.push(movie);
}


Person.prototype.getWatchedMovies = function () {
  let moviesList = ''
  for (let i = 0; i < this.watchedMovies; i++) {
    moviesList += `🧜  ID: ${i} 👉  Cartoon: ${this.watchedMovies[i]} 🧚\n`;
  }
  return moviesList;  
}


const me = new Person('Danya', [new DisneyCartoon('Rapuncel', 2010), theLittleMermaid]);
console.log(me, '\n\n\n');
me.watchMovie(kungFuPanda);
console.log('\n\n\n', me);

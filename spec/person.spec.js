describe('Person', () => {
  let emma, rapunzel, frozen;

  beforeEach(() => {
    rapunzel = new DisneyCartoon('Rapunzel', 2010);
    frozen = new DisneyCartoon('Frozen', 2013);
    emma = new Person('Emma', [rapunzel]);
  });

  describe('the constructor', () => {
    it('is a function', () => {
      expect(Person).toEqual(jasmine.any(Function));
    });
  });

  describe('when called', () => {
    it('sets name, watchedMovies', () => {
      expect(emma.name).toEqual('Emma');
      expect(emma.watchedMovies).toContain(rapunzel);
    });
  });

  describe('.watchMovie()', () => {
    it('calls the cartoon`s play method', () => {
      spyOn(frozen, 'play');
      spyOn(rapunzel, 'play');
      emma.watchMovie(frozen);
      emma.watchMovie(rapunzel);
      expect(frozen.play).toHaveBeenCalled();
      expect(rapunzel.play).toHaveBeenCalled();
    });

    it('adds new cartoons to the watchedMovies', () => {
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).not.toContain(frozen);
      emma.watchMovie(frozen);
      expect(emma.watchedMovies.length).toEqual(2);
      expect(emma.watchedMovies).toContain(frozen);
    });

    it('doesn`t add watched cartoons to the watchedMovies', () => {
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).toContain(rapunzel);
      emma.watchMovie(rapunzel);
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).toContain(rapunzel);
    });
  });

  describe('person.watchedMovies.toString()', () => {
    it('returns pretty string of the watched movies', () => {
      let prettyString = 'The movies which Emma has watched:\n' + emma.watchedMovies;
      console.log(emma.watchedMovies);
      console.log(emma.watchedMovies.toString());
      

      emma.watchedMovies.forEach((movie, index) => {
        console.log(movie);
        
        expect(prettyString).toContain(`${index + 1}`);
        expect(prettyString).toContain(`${movie.title}`);
      });
    });
  });
});

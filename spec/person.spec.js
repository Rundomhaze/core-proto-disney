const { DisneyCartoon } = require('../src/cartoon');
const { Person } = require('../src/person');

describe('Person', () => {
  let emma;
  let rapunzel;
  let frozen;

  beforeEach(() => {
    rapunzel = new DisneyCartoon('Rapunzel', 2010);
    frozen = new DisneyCartoon('Frozen', 2013);
    emma = new Person('Emma', [rapunzel]);
  });

  describe('the constructor', () => {
    test('is a function', () => {
      expect(Person).toEqual(expect.any(Function));
    });
  });

  describe('when called', () => {
    test('sets name, watchedMovies', () => {
      expect(emma.name).toEqual('Emma');
      expect(emma.watchedMovies).toContain(rapunzel);
    });
  });

  describe('.watchMovie()', () => {
    test('calls the cartoon`s play method', () => {
      jest.spyOn(frozen, 'play');
      jest.spyOn(rapunzel, 'play');
      emma.watchMovie(frozen);
      emma.watchMovie(rapunzel);
      expect(frozen.play).toHaveBeenCalled();
      expect(rapunzel.play).toHaveBeenCalled();
    });

    test('adds new cartoons to the watchedMovies', () => {
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).not.toContain(frozen);
      emma.watchMovie(frozen);
      expect(emma.watchedMovies.length).toEqual(2);
      expect(emma.watchedMovies).toContain(frozen);
    });

    test('doesn`t add watched cartoons to the watchedMovies', () => {
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).toContain(rapunzel);
      emma.watchMovie(rapunzel);
      expect(emma.watchedMovies.length).toEqual(1);
      expect(emma.watchedMovies).toContain(rapunzel);
    });
  });

  describe('person.watchedMovies.toString()', () => {
    test('returns pretty string of the watched movies: 1 Rapunzel', () => {
      const prettyString = emma.watchedMovies.toString();
      emma.watchedMovies.forEach((movie, index) => {
        expect(prettyString).toContain(`${index + 1}`);
        expect(prettyString).toContain(`${movie.title}`);
      });
    });
  });
});

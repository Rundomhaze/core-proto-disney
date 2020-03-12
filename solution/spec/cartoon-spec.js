describe('Cartoon', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(Cartoon).toEqual(jasmine.any(Function));
    });
  });

  describe('when called', () => {
    it('sets title, year, age restrictions (if a cartoon is FOR children)', () => {
      let cartoon = new Cartoon('Малыш и Карлсон', 1968);
      expect(cartoon.title).toEqual('Малыш и Карлсон');
      expect(cartoon.year).toEqual(1968);
      expect(cartoon.forChildren).toBeTruthy();
    });

    it('sets title, year, age restrictions (if a cartoon is NOT FOR children)', () => {
      let cartoon = new Cartoon('Corpse Bride', 2005, false);
      expect(cartoon.title).toEqual('Corpse Bride');
      expect(cartoon.year).toEqual(2005);
      expect(cartoon.forChildren).toBeFalsy();
    });
  });
});


describe('Disney Cartoon', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(DisneyCartoon).toEqual(jasmine.any(Function));
    });

    it('extends Cartoon', () => {
      expect(DisneyCartoon.prototype).toBeInstanceOf(Cartoon);
    });

    it('extends Cartoon but the constructor remains the same', () => {
      expect(DisneyCartoon.prototype.constructor).toEqual(DisneyCartoon);
    });
  });

  describe('when called', () => {
    let disneyCartoon;

    beforeEach(() => {
      disneyCartoon = new DisneyCartoon('The Little Mermaid 🧜', 1989);
    });

    it('has Cartoon`s properties', () => {
      expect(disneyCartoon.title).toEqual('The Little Mermaid 🧜');
      expect(disneyCartoon.year).toEqual(1989);
      expect(disneyCartoon.forChildren).toBeTruthy();
    });

    it('has it`s own properties', () => {
      expect(disneyCartoon.studio).toEqual('Walt Disney');
      expect(disneyCartoon.studioLogo).toEqual('🏰🌠');
      expect(disneyCartoon.beginning).toEqual('Long, long ago in a faraway land...'); // default beginning.
    });
  });

  describe('.play', () => {
    let disneyCartoon;

    beforeEach(() => {
      disneyCartoon = new DisneyCartoon(
        'The Lion King 🦁',
        1994,
        true,
        'Naaaaaaaaants ingonyaaaaaaama bagithi Baba...',
      );
    });

    it('contains the studio and it`s logo', () => {
      expect(disneyCartoon.play()).toContain(disneyCartoon.studio);
      expect(disneyCartoon.play()).toContain(disneyCartoon.studioLogo);
    });

    it('contains the cartoon`s title', () => {
      expect(disneyCartoon.play()).toContain(disneyCartoon.title);
    });

    it('contains the beginning of the cartoon', () => {
      expect(disneyCartoon.beginning).toBe('Naaaaaaaaants ingonyaaaaaaama bagithi Baba...');
      expect(disneyCartoon.play()).toContain(disneyCartoon.beginning);
    });
  });
});


describe('DreamWorks Cartoon', () => {
  describe('the constructor', () => {
    it('is a function', () => {
      expect(DreamWorksCartoon).toEqual(jasmine.any(Function));
    });

    it('extends Cartoon', () => {
      expect(DreamWorksCartoon.prototype).toBeInstanceOf(Cartoon);
    });

    it('extends Cartoon but the constructor remains the same', () => {
      expect(DreamWorksCartoon.prototype.constructor).toEqual(DreamWorksCartoon);
    });
  });

  describe('when called', () => {
    let dreamWorksCartoon;

    beforeEach(() => {
      dreamWorksCartoon = new DreamWorksCartoon(
        'Kung Fu Panda 🐼',
        2008,
        true,
        'Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...',
      );
    });

    it('has Cartoon`s properties', () => {
      expect(dreamWorksCartoon.title).toEqual('Kung Fu Panda 🐼');
      expect(dreamWorksCartoon.year).toEqual(2008);
      expect(dreamWorksCartoon.forChildren).toBeTruthy();
    });

    it('has it`s own properties', () => {
      expect(dreamWorksCartoon.studio).toEqual('DreamWorks');
      expect(dreamWorksCartoon.studioLogo).toEqual('🌙');
      expect(dreamWorksCartoon.beginning)
        .toEqual('Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend...');
    });

  });

  describe('.play', () => {
    let dreamWorksCartoon;

    beforeEach(() => {
      dreamWorksCartoon = new DreamWorksCartoon('Shrek 💚', 2001);
    });

    it('contains the studio and it`s logo', () => {
      expect(dreamWorksCartoon.play()).toContain(dreamWorksCartoon.studio);
      expect(dreamWorksCartoon.play()).toContain(dreamWorksCartoon.studioLogo);
    });

    it('contains the cartoon`s title', () => {
      expect(dreamWorksCartoon.play()).toContain(dreamWorksCartoon.title);
    });

    it('contains the beginning of the cartoon', () => {
      expect(dreamWorksCartoon.play()).toContain(dreamWorksCartoon.beginning);
    });
  });
});

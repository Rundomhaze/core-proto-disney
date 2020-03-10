class Bird {
  constructor(wings, color, breed, age) {
    this.wings = wings;
    this.color = color;
    this.breed = breed;
    this.age = age;
  }

  fly() {
    console.log('flying');
  }
}

class Eagle extends Bird {

  constructor(wings, color, breed, age, eyesight) {
    super(wings, color, breed, age);
    this.eyesight = eyesight;
  }

  fly() {
    console.log('eagle flying');
  }
}


class Owl extends Bird{

}


class HenEagle extends Eagle {
  constructor(wings, color, breed, age, eyesight, mutant) {
    super(wings, color, breed, age, eyesight);
    this.mutant = mutant;
  }

  fly() {
    throw Error('Я курица!')
  }
}

// const bird = new Bird();
const eagle = new HenEagle(
  2,
  'brownie',
  'rashn',
  80+-3,
  'long',
  true
);
console.log(eagle);

// // const owl = new Owl();

// // console.log(bird, eagle, owl);
// eagle.fly();

// const hen = new Hen();
// hen.fly();
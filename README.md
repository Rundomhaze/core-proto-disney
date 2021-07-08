# Disney 🧚 


![screenshot](readme-assets/349186.jpg)


### Release 0

In folder `src` there are two files: `cartoon` and `person`. First of all, take a look at these files and study the contents.

```js
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
}
```

Constructor function `Сartoon` is common both for `DisneyCartoon` and `DreamWorksCartoon`. You are supposed to implement inheritance. Decide what should be in `prototype` and how should `constuctor` look like.

> p.s. take a look at tests.

### Release 1

And how about properties? We implemented inheritance in the previous release, but the properties still remained untouched.

Now `DisneyCartoon` has properties:

```js
  this.title = title;
  this.year = year;
  this.beginning = beginning;
  this.studio = 'Walt Disney';
```

As for `DreamWorksCartoon` :

```js
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.studio = 'DreamWorks';
```

It turns out that we repeat ourselves, duplicating the properties of the constructor function `Cartoon`, which is parent. Let's organize the code so that it won't be duplicated and the parent functions will be accessible from the child functions.

> Hint: Familiarize yourself with methods call, apply, bind. They can help to get rid of duplicated properties.

### Release 2

The cartoons are meant to be watched.

The `person` file has a constructor function `Person`.
It must have a name ( property `name` ) and a list of watched movies ( property `watchedMovies` ). Also there should be a movie watching method `watchMovie`. 

`watchMovie` should run catroon's `play` method and add new cartoons to the watch-list. Don't forget to check if our character has already seen the cartoon. 

### Release 3

If you look into the `person-spec` tests, in the last test case you will see the following code:

```js
 let prettyString = 'The movies which Emma has watched:\n' + emma.watchedMovies;
```

What do you think is going on here ?
First, experiment with [concatenation][конкатенация] of a string and array. It's clear about the string, but how about the [array][arr.toString]?

In this example, the we call method of the array `toString`, which is what we need to override. But be careful, you need to override the method of the specific array, not the global Array object.


[конкатенация]: https://en.wikipedia.org/wiki/Concatenation
[arr.toString]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/toString

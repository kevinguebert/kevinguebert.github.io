---
title: "Simple Object Oriented Programming with Javascript"
path: "/2018/07/06/simple-object-oriented-programming-with-javascript"
date: "2018-07-06T12:41:42.000Z"
tags: ["JS","Coding","Tutorials"]
excerpt: "## Constructing

With the introduction of ES6, creating classes in Javascript has improved. Even though the new syntax boils down to the same as it was previously done, coming from other OOP languages..."
---

## Constructing

With the introduction of ES6, creating classes in Javascript has improved. Even though the new syntax boils down to the same as it was previously done, coming from other OOP languages makes it easier to understand.

Previously, for creating classes before ES6 we would do it this way:

    function Pet(type, name) {
        this.type = type;
        this.name = name;
    }
    
    var winnie = new Pet('cat', 'Winnie');
    

Now with ES6, we can use the `class` syntax:

    class Pet {
        constructor(type, name) {
            this.type = type;
            this.name = name;
        }
    }
    var toby = new Pet('dog', 'Toby');
    

If you want to check and see whether these are the same, you can run a `typeof` on both of them and you will see that both are of type `function`!

## Inheritance

Inheritance with Javascript works very similarly to other languages:

    class Pet {
        constructor(name) {
            this.name = name;
        }
        feed() {
            console.log(`Feeding ${this.name}`);
        }
    }
    
    class Cat extends Pet {
        constructor(name) {
            super(name);
            console.log('Cat created');
        }
        meow() {
            console.log('Meow!');
        }
    }
    
    class Dog extends Pet {
        constructor(name) {
            super(name);
            console.log('Dog Created');
        }
        bark() {
            console.log('Woof!');
        }
    }
    
    const winnie = new Cat('Winnie'); // Cat created
    const toby = new Dog('Toby'); // Dog created
    
    winnie.name // "Winnie"
    toby.name // "Toby"
    
    winnie.meow() // "Meow!"
    winnie.bark() // Uncaught TypeError: winnie.bark is not a function
    
    toby.bark() // "Woof!"
    toby.meow() // Uncaught TypeError: toby.meow is not a function
    
    winnie.feed() // Feeding Winnie
    toby.feed() // Feeding Toby
    

As you can see above, both `Cat` and `Dog` inherit the same `feed()` method, but they both have their own methods `meow()` and `bark()` that only those instances can reference!

Hope you enjoy this little JS snippet!
![tenor-186846798](../../../static/content/images/2018/07/tenor-186846798.gif)

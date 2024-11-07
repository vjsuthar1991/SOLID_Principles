// Definition: Clients should not be forced to depend on methods they do not use.

// Before applying ISP
class Animal {
    constructor(name) {
        this.name = name;
    }

    fly() {
        throw new Error("This animal can't fly");
    }

    swim() {
        throw new Error("This animal can't swim");
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

class Dog extends Animal {
    // Dog needs to implement fly and swim methods even if it doesn't use them
}

// After applying ISP
class Walker {
    walk() {
        console.log("Walking");
    }
}

class Swimmer {
    swim() {
        console.log("Swimming");
    }
}

class Flyer {
    fly() {
        console.log("Flying");
    }
}

class Dog extends Walker { }

const dog = new Dog();
dog.walk(); // Walking

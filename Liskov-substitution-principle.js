// Definition: Subtypes must be substitutable for their base types without altering the correctness of the program.

// Before applying LSP
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly!");
    }
}

// After applying LSP
class Bird {
    move() {
        console.log("Moving");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    move() {
        console.log("Swimming");
    }
}

function makeBirdFly(bird) {
    if (bird instanceof FlyingBird) {
        bird.fly();
    } else {
        bird.move();
    }
}

const sparrow = new FlyingBird();
const penguin = new Penguin();
makeBirdFly(sparrow); // Flying
makeBirdFly(penguin); // Swimming

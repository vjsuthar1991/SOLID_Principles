// Definition: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

// Before applying OCP
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class AreaCalculator {
    calculate(shape) {
        if (shape instanceof Rectangle) {
            return shape.area();
        }
        // What if we need to support more shapes? We need to modify this class.
    }
}

// After applying OCP
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator {
    calculate(shape) {
        return shape.area();
    }
}

const shapes = [new Rectangle(10, 20), new Circle(5)];
const calculator = new AreaCalculator();
shapes.forEach(shape => console.log(calculator.calculate(shape)));

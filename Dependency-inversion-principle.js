// Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details should depend on abstractions.

// Before applying DIP
class UserService {
    constructor() {
        this.db = new Database();
    }

    getUser(id) {
        return this.db.findUserById(id);
    }
}

// After applying DIP
class UserService {
    constructor(db) {
        this.db = db;
    }

    getUser(id) {
        return this.db.findUserById(id);
    }
}

class Database {
    findUserById(id) {
        // Find user by ID from the database
    }
}

class MockDatabase {
    findUserById(id) {
        // Return a mock user for testing
    }
}

const db = new Database();
const userService = new UserService(db);
console.log(userService.getUser(1)); // Real database call

const mockDb = new MockDatabase();
const testUserService = new UserService(mockDb);
console.log(testUserService.getUser(1)); // Mock database call

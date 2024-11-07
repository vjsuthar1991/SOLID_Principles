// Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.

// Before applying SRP
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // This method violates SRP because it's handling both user logic and email logic
    sendEmail(message) {
        console.log(`Sending email to ${this.email}: ${message}`);
    }
}

// After applying SRP
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class EmailService {
    sendEmail(user, message) {
        console.log(`Sending email to ${user.email}: ${message}`);
    }
}

const user = new User("John Doe", "john@example.com");
const emailService = new EmailService();
emailService.sendEmail(user, "Welcome to our service!");

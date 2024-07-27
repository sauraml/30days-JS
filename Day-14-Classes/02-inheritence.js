// Activity 2: Class Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

// • Task 3: Define a class Student that extends the Person class. Add a property studentld and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getStudentID() {
        return this.studentID;
    }

    // • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
    greeting() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old. Student Id: ${this.studentID}`;
    }
}

const kurisu = new Student("Kurisu Makise", 18, 516846);
console.log(`Student ID: ${kurisu.getStudentID()}`);
console.log(kurisu.greeting());

// Student.prototype.greeting = function () {
//     return `Hello, I'm ${this.name} and I'm ${this.age} years old. Student Id: ${this.studentID}`;
// };

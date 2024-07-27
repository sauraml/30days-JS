// Activity 3: Static Methods and Properties

// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello everyone";
    }
}

console.log(Person.genericGreeting());

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
        Student.studentCount++;
    }

    getStudentID() {
        return this.studentID;
    }

    greeting() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old. Student Id: ${this.studentID}`;
    }
}

console.log(
    "Before creating any instances of Student class studentCount: " +
        Student.studentCount
);

const okabe = new Student("Rintaro Okabe", 18, 56516);
const makise = new Student("Makise Kurisu", 18, 42570);

console.log(
    "After creating 2 instances of Student class studentCount: " +
        Student.studentCount
);

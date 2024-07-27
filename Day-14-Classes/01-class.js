// Activity 1: Class Definition

// • Task 1: Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

const okabe = new Person("Rintaro Okabe", 18);
console.log(okabe.greeting());

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.setAge = function (newAge) {
    this.age = newAge;
    console.log(`Updated age is ${this.age}`);
};

okabe.setAge(20);

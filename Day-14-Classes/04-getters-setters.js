// Activity 4: Getters and Setters

// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() {
        return `Hello, I'm ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
    }

    static genericGreeting() {
        return "Hello everyone";
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    setFullName(newFirstName, newLastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
}

console.log("Getting the full name");
const person = new Person("Rintaro", "Okabe", 18);
console.log(person.getFullName());

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using the setter and log the updated full name.

console.log("Updating the full name");
person.setFullName("Kurisu", "Makisu");
console.log(person.getFullName());

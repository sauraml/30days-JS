// • Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
    name: "Rengoku Kyojuro",
    age: 25,
    isActive: false,
    breathingForms: [
        "First Form: Unknowing Fire",
        "Second Form: Rising Scorching Sun",
        "Third Form: Blazing Universe",
        "Fourth Form: Blooming Flame Undulation",
        "Fifth Form: Flame Tiger",
        "Ninth Form: Rengoku",
    ],
    listAttacks() {
        return this.breathingForms;
    },
};

export default person;

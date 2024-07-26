// Activity 1: Creating and Exporting Modules
import add from "./add.js";
import person from "./person.js";

let result = add(20, 30);
console.log(result);

const name = person.name;
const isActive = person.isActive;
const breathingForms = person.listAttacks();

console.log(name);
console.log(isActive);
console.log(breathingForms);

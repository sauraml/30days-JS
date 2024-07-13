// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let speed = 150;
const acceleration = 9.8;

console.log("Initialisation");
console.log("speed", speed);
console.log("acceleration", acceleration);

speed = 140;
acceleration = 10;
console.log("Reassignment");
console.log("speed", speed);
console.log("acceleration", acceleration);
// TypeError: Assignment to constant variable.

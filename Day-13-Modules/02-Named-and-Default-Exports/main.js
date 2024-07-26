// Activity 2: Named and Default Exports
import { add, subtract, multiply, moduluo } from "./myMath.js";
import cube from "./default-exports.js";

console.log(add(10, 20));
console.log(subtract(100, 12));
console.log(multiply(5, 20));
console.log(moduluo(143, 12));

console.log(cube(5));

// Activity 3: Importing Entire Modules
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as circle from "./circle.js";

console.log(circle.PI);
console.log(circle.TAU);
console.log(circle.goldenRatio);
console.log(circle.calculateArea(35));
console.log(circle.arcLength(35, 90));
console.log(circle.sectorArea(35, 90));

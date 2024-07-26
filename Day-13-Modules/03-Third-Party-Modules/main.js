// Activity 4: Using Third-Party Modules
// • Task 6: Install a third-party module (e.g., lodash ) using npm. Import and use a function from this module in a script.
import capitalize from "lodash/capitalize.js";
import _ from "lodash";

const nums = [1, 2, 4, 6, 3, 5, 8, 3, 4, 3];
console.log(nums);

const uniqNums = _.uniq(nums);
console.log(uniqNums);

const text = "hello world";
console.log(capitalize(text));

// • Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

axios
    .get("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

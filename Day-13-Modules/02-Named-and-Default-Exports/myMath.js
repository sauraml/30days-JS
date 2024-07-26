// • Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function moduluo(x, y) {
    return x % y;
}

export { add, subtract, multiply, moduluo };

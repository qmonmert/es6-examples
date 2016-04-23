"use strict";

function multiply(a) {
    var b = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    return a * b;
}

console.log(multiply(5)); // 5
console.log(multiply(2, 3)); // 6
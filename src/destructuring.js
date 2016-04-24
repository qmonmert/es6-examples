// Exemple 1

var list = [1, 2, 3];
var [a, , b] = list;
console.log(a); // 1
console.log(b); // 3

// Exemple 2

var numbers = ["one", "two", "three"];

// Sans la déstructuration
var one = numbers[0];
var two = numbers[1];
var three = numbers[2];

// Avec la déstructuration
var [one, two, three] = numbers;
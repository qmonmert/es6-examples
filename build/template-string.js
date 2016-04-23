'use strict';

var person = { name: 'quentin', age: 27 };

// Interpolation
var description1 = person.name + ' has ' + person.age;
console.log(description1); // quentin has 27

// Multi-ligne
var description2 = 'Name : ' + person.name + '\nAge : ' + person.age + '\n';
console.log(description2);
// Name : quentin
// Age : 27
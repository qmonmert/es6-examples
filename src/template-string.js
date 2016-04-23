let person = { name: 'quentin', age: 27 };

// Interpolation
let description1 = `${person.name} has ${person.age}`;
console.log(description1); // quentin has 27

// Multi-ligne
let description2 = `Name : ${person.name}
Age : ${person.age}
`;
console.log(description2);
// Name : quentin
// Age : 27

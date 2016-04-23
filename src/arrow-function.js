// Example 1

const colors = [ "red", "blue", "green" ];

// Sans la fonction fléchée
const size1 = colors.map(function(s) { return s.length; });
console.log(size1); // [3, 4, 5]

// Avec la fonction fléchée
const size2 = colors.map( s => s.length );
console.log(size2); // [3, 4, 5]

// Example 2

// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++; // |this| réfère bien à l'objet personne
//     }, 1000);
// }

// var p = new Person();
// setInterval(() => {
//     console.log(p.age); // Incrémente l'age toutes les secondes   
// }, 1000);
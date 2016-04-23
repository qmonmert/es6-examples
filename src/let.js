var x = 1;
let y = 2;
if (true) {
    var x = 11;
    let y = 22;
    let z = 3;
    console.log(x, y, z); // 11 22 3
}
console.log(x, y); // 11 2
// Here z is undefined
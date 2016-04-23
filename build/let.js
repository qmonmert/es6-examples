"use strict";

var x = 1;
var y = 2;
if (true) {
    var x = 11;
    var _y = 22;
    var z = 3;
    console.log(x, _y, z); // 11 22 3
}
console.log(x, y); // 11 2
// Here z is undefined
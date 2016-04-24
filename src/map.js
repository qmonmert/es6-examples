let myMap = new Map();
myMap.set("hello", 4);
myMap.set(33, "hey");
console.log(myMap.get(33) === "hey"); // true
console.log(myMap.size === 2); // true
for (let [ key, val ] of myMap.entries())
    console.log(key + " = " + val);
 // hello = 4
 // 33 = hey   
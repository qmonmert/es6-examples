let myColors = ["red", "blue", "green"];

for (let color of myColors) {
    console.log(color); // red blue green
}

for (let color in myColors) {
    console.log(color); // 0 1 2
}
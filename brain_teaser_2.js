const bunnies = ['Lucy', 'Tom', 'Molly', 'Bella', 'Mario', 'Luigi'];

for(let i = 0; i < bunnies.length; i++) {
    bunnies[i].length>4?console.log(bunnies[i]):"";
}

// WHILE LOOP
console.log( '\n WHILE LOOP \n');

let i = 0;
while (i < bunnies.length) {
    bunnies[i].length > 4 ? console.log(bunnies[i]) : "";
    i++;
}
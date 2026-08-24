const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
];

// Print 'Lucy' and 'Bella' 
console.log(nestedArrays[0][0])
console.log(nestedArrays[1][1])

// Print every name using nested loops
for (let i = 0; i < nestedArrays.length; i++) {
  for (let j = 0; j < nestedArrays[i].length; j++) {
    console.log(nestedArrays[i][j]);
  }
}
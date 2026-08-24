const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
  ['Mario', 'Luigi'],
];


let number = 1
for (let i = 0; i < nestedArrays.length; i++) {

  for (let j = 0; j < nestedArrays[i].length; j++) {
    console.log(`${number++}. ${nestedArrays[i][j]}`);
  }
}
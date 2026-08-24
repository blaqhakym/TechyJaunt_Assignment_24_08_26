let carrots = 3;

while (carrots) {
  console.log('munch');
  carrots--;
}


// it will stop after printing 'munch' three times. Once carrots reaches 0, the loop will terminate.
// if i delete carrots--, the loop will become an infinite loop because the value of carrots will never decrease, and the condition will always be true.
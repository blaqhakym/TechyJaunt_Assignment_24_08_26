const countHappyBunnies = (bunnies) => {
  let count = 0;

bunnies.forEach(bunny => {
    if( bunny.isHappy) {
        count++;}
});
if (count > bunnies.length / 2) {
    console.log("Most bunnies are happy");

} else {
    console.log("Most bunnies are not happy");
}
return count;

}

countHappyBunnies([
  { name: 'Lucy', isHappy: true },
  { name: 'Tom', isHappy: false },
  { name: 'Molly', isHappy: true },
])

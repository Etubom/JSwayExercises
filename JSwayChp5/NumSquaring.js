//Complete the following program so that 
//the square1() and square2() functions work properly.
// Square the given number x
function square1(x) {
  const sq = (Math.pow(x, 2)); // TODO: complete the function code
  return sq;
}

// Square the given number x
const square2 = x => (Math.pow(x, 2)); // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
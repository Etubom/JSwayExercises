// Write a program that asks the user for a number, then shows the multiplication table for this number.

//** When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let x = Number(prompt('Enter a number between 2 - 9'));

if(x > 1 && x < 10){
  for(var i = 1; i < 13;i++){
    console.log(x +' x '+ i +' = '+ x * i );
  }
} else {
  console.log(x +' is an invalid entry');
}
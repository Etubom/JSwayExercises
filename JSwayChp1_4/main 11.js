// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let x = Number(prompt('What numbers multiplication table do you want to see?'));

for(var i =1;i < 12;i++){
  
  console.log (x +' x '+ i +' = '+ x * i );
}
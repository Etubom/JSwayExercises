// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for(let i = 1;i <= 100;i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  }else{
    console.log(i);
  }
}
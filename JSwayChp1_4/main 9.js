// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

// This exercise has many, many solutions. It's a job interview classic that a significant number of candidates fail. Try your best!

for(var i = 1; i <= 100 ;i++){
  if(i % 3 === 0){
    console.log('fizz');
  }else{
    console.log(i);
  }
}


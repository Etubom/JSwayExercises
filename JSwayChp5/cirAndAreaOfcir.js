/** Write a program containing two functions to calculate the circumference and area of a circle defined by its radius.
 Test it using user input.

 Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories...
 Or a Google click away :)
 The value of number π (Pi) is obtained with Math.PI in JavaScript.
 You might want to use the exponentiation operator ** to perform computations.
 console.log(2 ** 3); // 8: 2 * 2 * 2
 console.log(3 ** 2); // 9: 3 * 3

C = 2(л)r
A = лr²*/
let r = Number(prompt('Enter the radius to find the circumference'));
function circumference(radius) {
  console.log( 'Circumference is '+ 2 * Math.PI * radius);
}

circumference(r);

let x = Number(prompt('Enter the radius to find the area'));

function area(radius){
  console.log('Area is '+ Math.PI * (radius**2));
}

area(x);

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let input = Number(prompt('Enter a number between 50 - 100'));
//

if(input){
  while(input < 50 || input > 100){
     input = prompt('<> Number must be between 50 - 100');
   }
  console.log('::::::Input entered::>>>> '+input);
}else{
  console.log(input +'<<<<<is an invalid input>>>>>>');
}

 

// if(input > 50 && input < 100){
//   console.log(input+ 'Is valid');
// } else {
//   prompt('>>>>Re-enter correct num please');
// }
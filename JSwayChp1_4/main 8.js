// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let textInput = (prompt('Enter some text?'));
//let text = (textInput === "yes" || textInput === "no");
while(textInput !== "yes" && textInput !== "no"){
  textInput = prompt("Neither yes");
}
console.log(typeof textInput);


// while(textInput != 'yes' || textInput != 'no') {
//   textInput = prompt(('Neither yes or no '));
// }
// alert('Your out of the loop');

// while(text !== true){
//   textInput = prompt('Neither yes nor no');
// }

// if(text){
//   while(text !== 'yes' || text !== 'no'){
//     text = prompt('>>>>:Text must be either YES or NO to end loop')
//   }
// }else{
//   alert('You have existed the game');
// }

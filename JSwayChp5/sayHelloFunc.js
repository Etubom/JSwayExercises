// Say hello to the user
function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

let x = prompt('What is your first name?');// TODO: ask user for first and last name
let y = prompt('What is your last name?');// TODO: ask user for first and last name

sayHello(x,y);// TODO: call sayHello() and show its result
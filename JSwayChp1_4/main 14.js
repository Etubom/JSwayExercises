//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
var input = parseInt(prompt('Enter a number?'));

if (input) {
	while (input > 100) {
		input = prompt('Try again');
	}
	console.log('num:', input);
} else {
	alert('Only numbers!');
}

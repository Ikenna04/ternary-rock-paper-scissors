// Rock Paper Scissors With Ternary Operator

let player = 'paper';
let computer = 'paper';
let result =
	player === computer
		? 'Tie Game'
		: player === 'rock' && computer === 'paper'
		? 'Computer Wins'
		: player === 'paper' && computer === 'scissors'
		? 'Computer Wins'
		: player === 'scissors' && computer === 'rock'
		? 'Computer Wins'
		: player === 'rock' && computer === 'scissors'
		? 'You Won'
		: player === 'paper' && computer === 'rock'
		? 'You Won'
		: player === 'scissors' && computer === 'paper'
		? 'You Won'
		: 'Wrong Value';

console.log(result);
console.log('Your Choice Is ', player);
console.log("Computer's Choice Is ", computer);

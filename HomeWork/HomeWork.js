//=============================
// Part 1
//=============================
console.log('Hello, lets play "Rock, Paper, Scissors!"');

const random = Math.floor(Math.random() * 10) % 3; // Random number betwen 0 and 3 used for index.
// console.log(random);

const array = ['Rock', 'Paper', 'Scissors'];
// console.log(array[random]);

let UserChoice = '';
while (UserChoice !== 'Rock' && UserChoice !== 'Paper' && UserChoice !== 'Scissors') {
	UserChoice = prompt('Please enter your choice (Rock|Paper|Scissors)');
	if (!UserChoice)
		break;
}

if(UserChoice !== '') {
	console.log(UserChoice);

	if(array[random] === UserChoice)
		console.log('It\'s a tie');
	else if((array[random] === 'Rock'     && UserChoice === 'Scissors') || 
		    (array[random] === 'Scissors' && UserChoice === 'Paper'   ) || 
		    (array[random] === 'Paper'    && UserChoice === 'Rock'    ))
		console.log('You lose, computer chose ' + array[random]);
	else
		console.log('You win, computer chose ' + array[random]);
}


//=============================
// Part 2
//============================= 
console.log('\nHello, write your age');
let UserAge = 0;
while (UserAge < 1 || UserAge > 129) {
	UserAge = prompt('Please enter your Age (Between 1 and 129 years)');
	if (!UserAge)
		break;
}
if(UserAge !== '')
	console.log('You are ' + UserAge + ' years old');


//=============================
// Part 3
//============================= 
let Radius = 0;
while (Radius <= 0)
	Radius = prompt('\nPlease enter a circle radius');
let Area = Math.PI * Radius ** 2;
console.log('Area of circle is ' + Area);
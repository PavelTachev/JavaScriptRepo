function sum(a, b = 0) {
	return a + b;
}

const sum2 = function (a, b = 3) {
		return a + b;
}; // Anonimna funkcia

const sum3   = (a, b) => {return a + b;}; // lambda func
const sum4   = (a, b) => a + b;           // lambda func (way 2 only return)
const pow2   = a      => a ** 2;          // lambda func (way 3 only one parameter)

console.log(sum(13, 2));
console.log(sum2(5, 2));
console.log(sum3(5, 26));
console.log(typeof sum2);

// All parameters are given with reference(pointers, no need to return).
const sort = array => {
	array.sort();
};

let arr = [1, 3, 5, 7, 2, 4, 0, -10];
sort(arr);
console.log(arr);


let a1 = [];
let a2 = a1;          // Same array with two names
// let a2 = [];
// a2 = a1;
console.log(a1, a2);
a2.push(5);           // Both arrays have value 5 in them!
console.log(a1, a2);

const person = {
	Fname: 'John',
	Lname: 'Snow',
	Age  : '24',
	call : function () {
		console.log(`Hi, my name is ${person.Fname} ${person.Lname} and I\'m ${person.Age}`);
		console.log(`Hi, my name is ${this.Fname} ${this.Lname} and I\'m ${this.Age}`);
	},
};
person.call();

const fibonacci = (n, arr = [1, 1], i = 2) => {
	if (n < 1) return;
		switch (n) {
		case 1:
			return [1];
		case 2:
			return [1, 1];
		// default:
	}
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	i++;
	if (i === n)
		return arr;

	return fibonacci(n, arr, i);
};
console.log(fibonacci(5));

// www.w3resource.com/javascript-exercises/
// 7
const FizzBuzz = () => {
	for(let i = 0; i < 101; i++) {
		if      (i % 3 === 0)
			console.log('Fizz\n');
		else if (i % 5 === 0)
			console.log('Buzz\n');
		else if (i % 3 === 0 && i % 5 === 0)
			console.log('FizzBuzz\n');
		else
			console.log(i);
	}
};
//FizzBuzz();


//8
const is_happy = number => {
	const start_number = number;
	while (number >= 10) {
		const num_digits = Array.from(String(number));
		//for (const i in num_digits) - i === index
		//for (const i of num_digits) - i === digit // Cannot be used in objects
		for (const i in num_digits) {
			num_digits[i] = num_digits[i] ** 2;
		}
		number = 0;
		for (const digit of num_digits) {
			number += digit;
		}
	}
	return number === 1 ? start_number : 'sad';
};

const lucky = [];
let i = 10;
while (lucky.length < 5) {
	const result = is_happy(i);
	i++;
	if (result !== 'sad')
		lucky.push(result);
}
console.log(lucky);
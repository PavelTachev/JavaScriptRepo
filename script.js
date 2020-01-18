//alert('Hello world');         // izvejda info
console.log('Hello console'); // izvejda info

// const a = 10; //constant
// let   b = 20; // Var declaration

//console.log(b);
// b+=44;
//console.log(a, b);

const number = 10;
const string = 'musaka';
const bool   = true;

console.log(number + ' => ' + typeof number);
console.log(string + ' => ' + typeof string);
console.log(bool   + ' => ' + typeof bool);


const a = 45;
const b = 6;

// Operations: //
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / 10)
// console.log(a % b);

console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-34));

// console.log(Math.ceil(4.6));  // 5
// console.log(Math.floor(4.6)); // 4
// console.log(Math.round(4.6)); // 5

// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(25));

// console.log(Math.min(5, 10, 0));
// console.log(Math.max(1, 3, 5));

console.log(Math.random()); // 0 - 1

const random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// Objects and arrays

const array  = [5, 'lasagna', true, [1, 2, 3], {}]; // Array (list)
const coders = {                                    // Object (Hash)
	red    : '#FF0000',
	blue   : '#0000FF',
	green  : '#00FF00',
	pinkish: '#FAC'
};
console.log(array);
console.log(array[array.length - 1]); // Last element
console.log(coders['red']);
console.log(coders.red);

array.push(5);    // Pop at end
array.pop();      // Pop from end
array.unshift(7); // Push at begining
array.shift();    // Remove first element and return it

// ----------------------------

// if(2 === '2') // Not equal - '===' checks types! #TypesMatter :D


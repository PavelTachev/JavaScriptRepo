//=============================
// Part 1
//=============================
const factoriel = (n, result = 1) => {
    if (n < 1)
        return;
    result *= n;
    n--;
    if (n === 0)
        return result;
    return factoriel(n, result);
};
const result = factoriel(5);
console.log(result);


//=============================
// Part 2
//=============================
const Most_frequent = (arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) => {
	let	 object = {};
    if (arr.length < 1)
        return;

	console.log('Array is ' + arr);
	for(let i = 0; i < arr.length; i++) {
		if (arr[i].toString() in object)
			object[arr[i].toString()] ++;
		else
			object[arr[i].toString()] = 1;
	}

	console.log(object);

	// '...' - spread all values of the array. 
	// This operator causes the values in the array to be expanded, 
	// or “spread”, into the function’s arguments.
	return Object.keys(object)[Object.values(object).indexOf(Math.max(...Object.values(object)))];
};
console.log(Most_frequent());


//=============================
// Part 3
//=============================
const Armstrong = number => {
    const start_number  = number;
    const number_digits = Array.from(String(number));

    for (const index in number_digits) {
        number_digits[index] = number_digits[index] ** 3;
    }
	number = 0;
    for (const digit of number_digits) {
        number += digit;
    }
    return number === start_number ? start_number : 'no';
};
const arm = [];
let i     = 100;
while (i <= 999) {
    const result = Armstrong(i);
    i++;
    if (result !== 'no')
        arm.push(result);
}
console.log(arm);


//=============================
// Part 4
//=============================
const Pattern = (n) => {
	let	 arr = [];
    if (n < 1)
        return;

	for(let i = 0; i < n; i++) {
		arr.push('*');
		console.log(arr.toString().replace(/,/g, ' '));
	}
};
Pattern(5);
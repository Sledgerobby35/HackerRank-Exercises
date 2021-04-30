"use strict";
function factorial(num){
	var result = num;
	for(let i = num - 1; i > 0; i--){
		result *= i;
		console.log(result);
	}
	return result;
}
console.log(factorial(4));
(function(){
	"use strict";
	var vowels = [];
	var consonants = [];
	function vowelsAndConsonants(s){
		let word = s.split("");
		for(let i = 0; i < word.length; i++){
			switch(word[i]) {
				case "a":
					vowels.push(word[i]);
					break;
				case "e":
					vowels.push(word[i]);
					break;
				case "i":
					vowels.push(word[i]);
					break;
				case "o":
					vowels.push(word[i]);
					break;
				case "u":
					vowels.push(word[i]);
					break;
				default:
					consonants.push(word[i]);
			}
		}
		displayOutput();
	}
	function displayOutput(){
		for(let i = 0; i < vowels.length; i++){
			console.log(vowels[i]);
		}
		for(let i = 0; i < consonants.length; i++){
			console.log(consonants[i]);
		}
	}
})();
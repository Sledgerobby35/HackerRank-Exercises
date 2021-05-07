(function(){
	"use strict";
	function getLetter(s) {
			let letter;
			let a = /^[aeiou]/i;
			let b = /^[bcdfg]/i;
			let c = /^[hjklm]/i;
			let d = /^[npqrstvwxyz]/i;
			switch(true){
				case a.test(s):
					letter = "A";
					break;
				case b.test(s):
					letter = "B";
					break;
				case c.test(s):
					letter = "C";
					break;
				case d.test(s):
					letter = "D";
					break;
				default:
					break;
			}
			console.log(s);
			return letter;
		}
})();
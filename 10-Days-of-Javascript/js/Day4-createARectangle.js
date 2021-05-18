(function(){
	"use strict";
	function Rectangle(a, b){
		let result = {
			length: a,
			width: b,
		};
		if(1 <= a <= 100 && 1 <= b <= 100){
			result.perimeter = (2 * (a + b))
			result.area = (a * b);
		}
		return result;
	}
	console.log(Rectangle(4,5));
})();
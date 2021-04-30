(function(){
	"use strict";
	function reverseString(s) {
		var result = "";
		var string;
		try{
			string = s.split("");
			string.reverse();
			result = string.join("");
		}
		catch(err){
			console.log(err);
		}
		finally{
			console.log(result);
		}
	}
})();
(function(){
	"use strict";
	function isPositive(a) {
		try{
			if(a > 0) return "YES";
			if(a === 0) throw "Zero Error";
			if(a < 0) throw "Negative Error";
			if(typeof a !== "number") throw "Input Error";
		}
		catch(err){
			return err;
		}
	}
})();
(function(){
	"use strict";
	function getCount(objects) {
		let result = 0;
		for(let i = 0; i < objects.length; i++) {
			if (1 <= (objects[i].x) <= 100 && 1 <= (objects[i].y) <= 100)
				if (objects[i].x == objects[i].y)
					result++;
		}
		return result;
	}
	let objArr = [
		{
			x: 1,
			y: 1,
		},
		{
			x: 2,
			y: 3,
		},
		{
			x: 3,
			y: 3,
		},
		{
			x: 3,
			y: 4,
		},
		{
			x: 4,
			y: 5,
		},
	]
	console.log(getCount(objArr));
})();
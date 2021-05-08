(function(){
	"use strict";
	function getSecondLargest(nums){
		for(let i = 0; i < nums.length; i++){
			if(1 <= nums[i] && nums[i] <= 10){
				nums.sort(function(a, b){
					return a - b;
				});
				return nums.pop()-1;
			} else {
				return false;
			}
		}
	}
})();
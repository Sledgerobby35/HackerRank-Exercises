(function(){
	"use strict";
	class Rectangle {
		constructor(w, h){
			this.w = w;
			this.h = h;
		}
	}
	Rectangle.prototype.area = (function(w, h){
		w = this.w;
		h = this.h;
		return w * h;
	});
	class Square extends Rectangle{
		constructor(w, h) {
			super(w);
			this.h = w;
		}
	}
	var rec = new Rectangle(10,2);
	console.log(rec.area());
	var sqa = new Square(7);
	console.log(sqa.area());
})();
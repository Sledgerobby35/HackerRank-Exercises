"use strict";
var counter = 1;
var btn = document.getElementById("btn");
btn.onclick = function(){
	btn.innerHTML = `${counter++}`;
}
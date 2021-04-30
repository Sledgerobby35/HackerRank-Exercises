process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
});

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});

// Reads complete line from STDIN
function readLine() {
	return input_stdin_array[input_currentline++];
}
// The code I added
function main() {
let i = 4;
let d = 4.0;
let s = "Hacker Rank";
let i2;
let d2;
let s2;
i2 = readLine();
d2 = readLine();
s2 = readLine();
console.log(`${i + Number(i2)}`);
console.log(`${(parseFloat(d) + parseFloat(d2)).toFixed(1)}`);
console.log(s + s2);
}
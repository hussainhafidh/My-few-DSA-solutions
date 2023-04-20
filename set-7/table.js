let fs = require("fs");
let data = fs.readFileSync('./table.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let N = parseInt(readLine())
let ans 
for(let i=1;i<=10;i++){
    ans = N*i
    console.log(ans);
}
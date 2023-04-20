let fs = require("fs");
let data = fs.readFileSync('./ranger.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine())
for (let i = 0; i < n; i++) {
    let k = parseInt(readLine())
    let arr = readLine().split(" ").map(Number)
    let mul = 1
    for (let j = 0; j < k; j++) {
        mul = mul * arr[j]
    }
    let ans = []
    if (mul !== 0) {
        for (let i = 0; i < k; i++) {
            ans[i] = mul / arr[i]
        }
    }
    else {
        let mul1 = 1
        for (let i = 0; i < k; i++) {
            if (arr[i] != 0) {
                mul1 = mul1 * arr[i]
            }
        }
        for (let i = 0; i < k; i++) {
            if (arr[i] != 0) {
                ans[i] = 0
            }
            else {
                ans[i] = mul1
            }
        }
    }
    console.log(...ans);
}
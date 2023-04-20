let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n = parseInt(readLine());
let initial = "OFF"
let count = 0
for (let i = 0; i < n; i++) {
    let present = readLine();
    if (initial == "OFF" && present == "Toggle") {
        initial = "ON"
        count++
    }
    else if (initial == "OFF" && present == "ON") {
        initial = "ON"
        count++
    }
    else if (initial == "OFF" && present == "OFF") {
        initial = "OFF"
    }
    else if (initial == "ON" && present == "Toggle") {
        initial = "OFF"
    }
    else if (initial == "ON" && present == "OFF") {
        initial = "OFF"
    }
    else if (initial == "ON" && present == "ON") {
        initial = "ON"
    }
}
console.log(count);
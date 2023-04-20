let fs = require("fs");
let data = fs.readFileSync('./unique.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function unique(str){
    let strings = new Map()
    str =  str.trim()
    for(let i = 0; i<str.length; i++){
        if(!strings.has(str[i])){
            strings.set(str[i], 1)
        }else{
            let cnt = strings.get(str[i])
            strings.set(str[i], cnt+1)
        }
    }
    for(let i = 0; i<str.length; i++){
        if(strings.get(str[i]) == 1){
            return i
        }

    }
    return -1
}
let n = parseInt(readLine())
for(let i =0 ; i<n ; i++){
    let str = readLine()
    console.log(unique(str))
}
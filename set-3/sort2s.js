let fs = require("fs");
let data = fs.readFileSync('./in7.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
/*
5
25 988888 22 52222 2992
*/

function twos(n){
    let arr = n.toString().split('')
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === '2'){
            count++
        }
    }
    return count
}
function sort2s(arr){
   arr.sort((a,b)=>{
    let count1 = twos(a)
    let count2 = twos(b)
    if(count1 == count2){
        return b - a
    }
    return count2 - count1
   })
   return arr
}
let n = parseInt(readLine())
let arr = readLine().split(' ').map(Number)
console.log(...sort2s(arr));
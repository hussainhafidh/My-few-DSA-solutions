let fs = require("fs");
let data = fs.readFileSync('./in6.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------


function palindrome(str){
    let left = 0
    let right  = str.length - 1
    while (left < right){
        if(str[left] !== str[right]){
            return "False"
        }
        left++
        right--
    }
    return 'True'
}
function modifiedPalindrome(str){
    let left = 0
    let right = str.length - 1
    while(left < right){
        if(str[left] !== str[right]){
            return palindrome(str.slice(left + 1, right + 1)) || palindrome(str.slice(left, right))
        }
        left++
        right--
    }
    return 'True'
}

let n = parseInt(readLine())
for(let i=0;i<n;i++){
    let str = readLine()
    console.log(modifiedPalindrome(str));
}
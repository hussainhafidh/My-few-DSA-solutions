let fs = require("fs");
let data = fs.readFileSync("./input.txt", "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}



let str=readLine();
let ans="";
for(let i=0;i<str.length;i++){
    if(str.charAt(i)===str.charAt(i).toLowerCase()){
        ans+=str.charAt(i).toUpperCase();
    }else{
        ans+=str.charAt(i).toLowerCase();
    }
}
console.log(ans);
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n=parseInt(readLine());
let ans=0;
let series=9;
while(n--){
    ans+=series;
    series=series*10+9;
}
console.log(ans);
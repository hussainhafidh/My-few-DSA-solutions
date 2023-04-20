let fs = require("fs");
let data = fs.readFileSync('./sequences.txt', 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let n=parseInt(readLine());
let arr=readLine().trim().split(" ").map(Number);
let max_num=Math.max(...arr);
let map= new Map;
let max_count=1;
for(let i=0;i<n;i++)
{
	if(map.has(arr[i]))
	{
		map.set(arr[i],map.get(arr[i])+1);
        if(map.get(arr[i])>max_count)
        {
            max_count=map.get(arr[i]);
            max_count_num=arr[i];
        }
	}
	else{
		map.set(arr[i],1);
	}
}
let map1= new Map(map)
 
let count=0;
let prev_max=0;
for(let i=max_num;i>=1;i--)
{
    
    let presnt=0;
    if(map.has(i))
    {
      presnt=map.get(i);
      if(presnt<prev_max)
      {
        count+=(prev_max-presnt);
        map.set(i,prev_max);
      }       
    }
    else
    {
        count+=prev_max;
        map.set(i,prev_max);
    }
    prev_max=Math.max(presnt,prev_max) 
    
}
let arr1=[];
 
if(count==0)
{
    for(let i=max_count;i>=1;i--)
    {
        let arr2=[];
        for (let [key, value] of map1) {
            if(map1.get(key)>0)
            {
                arr2.push(key);
                map1.set(key,map1.get(key)-1);
            }           
            }
            arr1.push(arr2);
    }
    console.log(arr1.length)
    for(let i=arr1.length-1;i>=0;i--)
{
    console.log(...arr1[i])
}
 
}
else{
    console.log(count)
}
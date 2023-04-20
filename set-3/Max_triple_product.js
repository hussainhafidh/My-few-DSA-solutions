// Max_Triple_Product
// Given an integer array, find three numbers whose product is maximum and output the maximum product.

// Input
// The first line denotes n, the size of the array. The next n lines denotes the n elements of the array.

// Output
// Output a single integer denoting the result.

// Example
// Input: 4

// 1

// 2

// 3

// 4

// Output: 24

// Note:
// The length of the given array will be in range [3,10^4] and all elements are in the range [-1000, 1000].


let n = parseInt(readLine());
let num_array = []
let product = 0
for (let i = 0; i < n; i++) {
	num = parseInt(readLine());
    num_array.push(num)
}
num_array.sort(function(a, b) {return a - b});
let m = num_array.length
product = (num_array[m -1]) * (num_array[m - 2]) * (num_array[m - 3])

console.log(product)
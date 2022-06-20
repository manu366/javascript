//declearing an array
var arr=[10,20,30,40,50]
//accessing elements in normal way
let x=arr[3]
let y=arr[4]
console.log(x,y);
//accessing frist 2 elements of an arry
[x,y]=arr
console.log(x,y);
//accessing frist 3 elements of an arry
[x,y,z]=arr
console.log(x,y,z);
//accessing frist and last elements of an arry by skiping middle elements
var [a,,,,b]=arr
console.log(a,b);
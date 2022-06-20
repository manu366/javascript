var arr=[10,20,30,40,50]
for (var index =0; index < arr.length; index++) {
    console.log(index+"======"+arr[index]);
}
for (var i of arr) {
    console.log(i);
}
var i=0
for (var i in arr) {
    if (arr.hasOwnProperty.call(arr, i)) {
        console.log(i+"========="+arr[i]);       
    }
}
arr.forEach((element,index,arr)=>{
    console.log(element+"====="+index+"======"+arr);
})
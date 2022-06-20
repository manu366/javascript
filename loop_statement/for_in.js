var arr=[4,"manu",3.1,true]
var i=0
for (var i in arr) {
    if (arr.hasOwnProperty.call(arr, i)) {
        console.log(i+"  "+arr[i]);       
    }
}
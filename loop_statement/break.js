var arr=[4,"manu",3.1,true]
var i=0
for (var i = 0; i < arr.length; i++) {
    if (i>2) {
        console.log("i am here");
        break
    }
    console.log(arr[i]);
}
var arr=[4,"manu",3.1,true]
var i=0
for (var i = 0; i < arr.length; i++) {
    if (i>1) {
        console.log("i am here");
        continue
    }
    console.log(arr[i]);
}
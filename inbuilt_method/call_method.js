var myself={
    fname:"manohara",
    lname:"reddy",
    age:24,
    greet1:function () {
        console.log("hello "+this.fname);
        this.greet2.call(myself)
        this.greet2()
    }
}
var myfrd={
    fname:"arjun",
    lname:"V S",
    age:25,
    greet2:function () {
        console.log("hi "+this.fname);
    }
}
function greet(string1,string2) {
    console.log("hi  i am "+this.fname+string1+" to "+string2);
}
myself.greet1.call(myfrd)
myfrd.greet2.call(myself)
greet.call(myself,"welcome","TYSS")
greet.call(myfrd,"welcome","TYSS")
myfrd.greet2.call(myself)
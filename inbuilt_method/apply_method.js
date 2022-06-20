var myself={
    fname:"manohara",
    lname:"reddy",
    age:24,
    greet1:function () {
        console.log("hello "+this.fname+" "+this.lname);
    }
}
var myfrd={
    fname:"arjun",
    lname:"V S",
    age:25,
    greet2:function () {
        console.log("hi "+this.fname+" "+this.lname);
        this.greet1()
        this.greet1.apply(myself)
    }
}
function greet(string1,string2) {
    console.log("hi i am "+this.fname+" "+string1+" "+"to"+" "+string2);
}
// myself.greet1.apply(myfrd)
// myfrd.greet2.apply(myself)
// greet.apply(myself,["welcome","TYSS"])
greet.apply(myfrd,["welcome","TYSS"])
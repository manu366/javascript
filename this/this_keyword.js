var name="rama"
var myself={
    fname:"manohara",
    lname:"reddy",
    age:24,
    greet:function () {
        console.log(this.name);
        console.log("hello "+this.fname);
    }
}
myself.greet()


var myfrd={
    fname:"arjun",
    lname:"reddy",
    age:25,
    greet:function () {
        console.log(this.name);
        console.log("hi "+this.fname);
    }
}
myfrd.greet()
console.log("hello "+myself.fname);
var str="manohara"
function some() {
    var str="manohara"
    console.log(this.str);
    this.str=str
    console.log(this.str);
}some()


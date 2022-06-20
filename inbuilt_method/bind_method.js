var myself={
    fname:"manohara",
    lname:"reddy",
    greet1:function () {
        console.log("hi "+this.fname+" "+this.lname);
    }
}
var myfrd={
    fname:"raja",
    lname:"K S",
    greet2:function () {
        console.log("hi "+this.fname+" "+this.lname);
    }
}
function greeting(string1,string2) {
    console.log("hi "+this.fname+" "+this.lname+" "+string1+" "+"to"+" "+string2);
}
var result=myfrd.greet2.bind(myself)
result()
var result=greeting.bind(myself,"welcome","TYSS","come","TCS")
result()
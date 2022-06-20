var myself={
    Fristname:"manohara",
    lastname:"reddy",
    age:24,
    vehical:"bike",
    company:"TYSS",
    biobike:{
        model:2019,
        bikename:"palser",
        cc:220
    }
}
//case:1
var myname=myself.Fristname
console.log(myname);
//case:2
var{Fristname}=myself
console.log(Fristname);
//case:3
var {Fristname:fname}=myself
console.log(fname);
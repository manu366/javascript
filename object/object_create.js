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
    },
    data :function () {
        return  "i have "+this.vehical
    }

}
var biodata=Object.create(myself)
biodata.__proto__=myself       //inherite
biodata.Fristname="rama"      // override
biodata.lastname="mama"       //override
console.log(myself);          //printing object
console.log(biodata);
console.log(biodata.data());   //invok function
console.log(biodata.vehical);

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
myself.myskills=["manual testing","java","selenium","api"]
myself.batch="sdet34"                                     //add data into object
myself.location="chikkaballapura"                         //add data into object
console.log(myself.myskills);
delete myself.batch                                       //delete data from object
console.log(myself );                                     //print whole object
console.log(myself.data());                               //invok function in object
console.log(myself["company"]);                           //print value for perticular property
console.log(myself.company);
console.log(myself.biobike.bikename);                     //print value object inside object
console.log(myself.myskills[1]+" " +myself.myskills[2]);  //print value in array of object
console.log(myself.Fristname+" "+myself.lastname);        //print vaue of perticular property
var myself=new Object()
myself.Fristname="manohara"
myself.lastname="reddy"
myself.age=24
myself.bikename="palser"
myself.biobike={
    model:2019,
    bikename:"palser",
    cc:220
}
myself.data=function () {
    return "i have "+this.bikename
}
myself.company="TYSS"
myself.skills=["java","javascript","selenium","manual testing"]


console.log(myself);                   //print complete object
console.log(myself.Fristname);         //print particular property
console.log(myself.skills[2]);         //print particular element from array
console.log(myself.biobike.cc);        //print particular property from object inside object
console.log(myself.data());            //invok function in object
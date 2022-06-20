class mydata{
    constructor(Fristname,lastname,age,bikename,company,skills,greet,biobike) {
        this.Fristname=Fristname
        this.lastname=lastname
        this.age=age
        this.bikename=bikename
        this.company=company
        this.skills=skills
        this.greet=greet
        this.biobike=biobike
    }

}var myself=new mydata("manohara","reddy",24,"palser","TYSS",["java","javascript","selenium","api"],
function(){return "i have"+" "+this.bikename},{cc:220})
console.log(myself);                //print whole object
console.log(myself.skills[3]);      //print particular element in array
console.log(myself.greet());        //invok function in object
console.log(myself.biobike.cc);     //print particular value of property object inside object
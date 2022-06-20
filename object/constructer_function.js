function mydata(Fristname,lastname,age,bikename,company,skills,greet,biobike) {
    this.Fristname=Fristname
    this.lastname=lastname
    this.age=age
    this.bikename=bikename
    this.company=company
    this.skills=skills
    this.greet=greet
    this.biobike=biobike
}
var myself=new mydata("manohara","reddy",24,"palser","TYSS",["java","javascript","selenium","api"],
function(){return "i have"+this.bikename},{cc:220})


// console.log(myself.Fristname);      //print particular value of property
// console.log(myself.greet());        //invok function in object
// console.log(myself.biobike);        //print particular value of property
// console.log(myself);                //print whole object
// console.log(myself.skills[2]);      //print paricular element in array


var biodata=Object.create(myself)
biodata.__proto__=myself       //inherite
biodata.Fristname="rama"      // override
biodata.lastname="mama"       //override
console.log(myself);          //printing object
console.log(biodata);
class biodata{
    constructor(fname,lname,company){
        this.fname=fname
        this.lname=lname
        this.company=company
    }
    x=20
    static y=40
    display(){
        console.log(this.x)     //nonstatic inside nonstatic
        console.log(biodata.y);  //static inside nonstatic
    }
    static sample(){
        console.log(biodata.x);
        console.log(this.y);
    }

    display1(){
        this.display()     //invoking nonstatic methodd inside nonstatic method
        biodata.sample1()    //invoking static methodd inside nonstatic method
    }
    static sample1(bio1){
        this.sample()     //invoking static methodd inside static method
        bio1.display()   //invoking nonstatic methodd inside static method

    }

}
var bio1=new biodata("manoahara","redddy","TYSS")
var bio2=new biodata("raja","kumar","TCS")
console.log(bio1.fname);

// console.log(bio2.company);
// console.log(biodata.y);
// console.log(bio2.x);
// console.log(bio1);
// bio1.display()
// biodata.sample(bio1)
// bio1.display1()  //invok nonstatic method
biodata.sample1(bio1)   //invok static method
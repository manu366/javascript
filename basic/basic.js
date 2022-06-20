
console.log("==================================class destructuring=======================================================");
class myself{
	constrocter(fname,lname,age){
		this.fname=fname
		this.lname=lname
		this.age=age
		}
		a=10
		static b=20
		display(){
			console.log(this.a); //accessing nonstatic var in nonstatic method
			console.log(myself.b);//accessing static var in nonstatic method
		}
		static sample(mydata){
			console.log(this.b); //accessing static var in static method
			// console.log(mydata.a); //accessing nonstatic var in static method
		}
		display2(){
			this.display()//accessing nonstatic method inside nonstatic method
		}

		static sample2(){
			this.sample()//accessing static method inside static method
		}

}var mydata=new myself("manohara","reddy",24)
mydata.display()  //invoke nonstatic method
mydata.display2()  //invoke nonstatic method
myself.sample(mydata) //invoke static method
// myself.sample2()    //invoke static method



console.log("=====================================array destructuring====================================================");

var arr=[10,20,30,40,50]

// case1
var a=arr[1]
var b=arr[2]
console.log(a,b);   //output =20 30

// case2
var [a,b]=arr
console.log(a,b);    //output = 10 20

// case3
var [a,b,c]=arr
console.log(a,b,c);    //output = 10 20 30

// case4
var [a,,,,b]=arr
console.log(a,b);    //output = 10 50




console.log("=====================================object destructuring====================================================");
var myself1={fristname:"manohara",lastname:"reddy",age:24}

// case 1
var fname=myself1.fristname
console.log(fname);           //output  =  manohara

// case 2
var {fristname}=myself1
console.log(fristname);       //output  =  manohara

// case 3
var {fristname:fname}=myself1
console.log(fname);           //output  =  manohara
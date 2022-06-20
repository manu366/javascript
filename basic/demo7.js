
var mycar={
        vehicalname:"maruthi",
        model:2019,
        greet1:function(){ console.log("welcome"+" "+this.vehicalname+" "+this.model);}
        }
var mybus={
        vehicalname:"TATA",
        model:2022,
        greet2:function(){ console.log("welcome"+" "+this.vehicalname+" "+this.model);}
        }
function greeting(string1,string2)
{console.log("hi"+" "+this.vehicalname+"of"+" "+this.model+string1+" "+string2);}
// 1)call method-
    mybus.greet2.call(mycar)                                    //welcome maruthi 2019
    greeting.call(mycar,"welcome","home")                       //hi maruthi of 2019 welcome home
// 2)apply method-
    mybus.greet2.apply(mycar)                                    //welcome maruthi 2019
    greeting.apply(mycar,["welcome","home"])                     //hi maruthi of 2019 welcome home
// 3)bind method-
    var result=mybus.greet2.bind(mycar)
    result()                                                     //welcome maruthi 2019
    var result=greeting.bind(mycar,"welcome","home")
    result()   
    
    //hi maruthi of 2019 welcome home








    
	var sum=(a,b)=>{return a+b}
	console.log(sum(6,4));
		var some=(a,b)=>{
			if(a<b)
				console.log( "hello");	
        }
        some(2,4);
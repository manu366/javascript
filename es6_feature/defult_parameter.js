
function sum(a,b) {
    console.log(a+b);
}

sum(2)

sum(2,3)


function mul(a,b=3) {
    console.log(a*b);
}
mul(4)

mul(5,10)

class defult_parameter{
    constructor(a,b=2){
        console.log(a+b);
    }
}
let x=new defult_parameter(10)
let y=new defult_parameter(10,20)



class add{
    constructor(x,y){
        console.log(x+y);
    }
}
new add(10)
new add(10,50)
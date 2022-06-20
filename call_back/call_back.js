//example 3
function ecomerce(status) {
    var result=status()
    if (result()=="paymentsuccesful") {
        console.log("done");
    } else {
        console.log("fail");
    }
}
ecomerce(function paymentstatus() {
    return function () {
        return"paymentsuccesful";
    }
})
//step1==ecomerce iss invoked
//step2==status()== paymentstatus()  overriding function name
//step3== invoking  paymentstatus() function
//step4== result haveing annonumous function
//step5== result() invoking annoyamus function
//step6==return data 
//step7==compare the data in if condition
//step8==if true if block executed or else block executed



function some(a,b,parameter) {
    parameter()
    console.log("i am some function");
}
function disp() {
    console.log("i am disp function");
}

//example 1
some(10,20,disp)

function some1(parameter) {
    parameter()
    console.log("i am some function");
}

//example 2
some1(disp)
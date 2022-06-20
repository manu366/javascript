var a=10
var  b=20
function sample() {
    console.log(a);
    console.log(b);
    function inner() {
        console.log(a);
        console.log(b);
    }inner()
}sample()
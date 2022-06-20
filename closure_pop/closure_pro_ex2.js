var a=10
var  b=20
function sample() {
    console.log(a);
    var a=100
    console.log(b);
    function inner() {
        console.log(a);
        console.log(b);
        var b=200
        console.log(b);
    }inner()
}sample()
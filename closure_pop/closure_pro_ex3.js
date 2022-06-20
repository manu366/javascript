function outer(a) {
    return function inner(b) {
        console.log(a);
        return function inn(c) {
            return a+b+c
        }
    }
}
var inner=outer("manohara")
var inn=inner(" reddy");
console.log(inn(" K E"));
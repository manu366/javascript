var my_name="manohara"
var age=23
console.log(age);
function display_name() {
    var age=24
    var my_name=""
    console.log(my_name);
    function display_age() {
        console.log(age);          //undefined
        var age=25
        console.log(age);
        console.log(my_name);
    }display_age()
    function display_skills() {
        var skills="javascript"
        console.log(skills);
        console.log(my_name);
    }display_skills()
}display_name()
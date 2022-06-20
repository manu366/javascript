var date=new Date();
//Returns a date as a string value.
console.log(date.toDateString());

//Gets the day-of-the-month, using local time.
console.log("date------"+date.getDate());

//Gets the day of the week, using local time.
console.log("date------"+date.getDay());

//Gets the year, using local time.
console.log("date------"+date.getFullYear());

//Gets the month, using local time.
console.log("date------"+date.getMonth());

//Split a string into substrings using the specified separator and return them as an array.
var d=date.toDateString()

//Split a string into substrings using the specified separator and return them as an array.
console.log(d.split(" ")[1]);
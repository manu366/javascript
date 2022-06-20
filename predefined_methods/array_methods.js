// //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.concat(2));
// console.log(arr);

// //Appends new elements to the end of an array, 
// //returns the new length of the array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.push("mam"));
// console.log(arr);


// //Removes the last element from an array and returns it. If the array is empty, 
// //undefined is returned and the array is not modified.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);


// //Inserts new elements at the start of an array, and returns the new length of the array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.unshift("dad"));
// console.log(arr);


// //Removes the first element from an array and returns it. If the array is empty,
// // undefined is returned and the array is not modified.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);


// //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.splice(1,2,"RaRa"));
// console.log(arr);

// //Returns a copy of a section of an array. For both start and end,a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.slice(1,4));
// console.log(arr);

// //Determines whether all the members of an array satisfy the specified test.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.every((element)=>{element<4}));
// console.log(arr);

// //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.indexOf("mam",0));
// console.log(arr);

// //Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.lastIndexOf("javaScript",0));
// console.log(arr);

// //Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

// //Determines whether an array includes a certain element, returning true or false as appropriate.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.includes("manu"));
// console.log(arr);

// //Adds all the elements of an array into a string, separated by the specified separator string.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.join(","));
// console.log(arr);

// //Performs the specified action for each element in an array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// arr.forEach((element,index,arr)=>console.log( element+"-----"+index+"------"+arr));
// console.log(arr);


// //Calls a defined callback function on each element of an array, and returns an array that contains the results.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.map((element,index)=>{return element*3}));
// console.log(arr);

// //Returns the elements of an array that meet the condition specified in a callback function.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.filter((element)=>{return element>1}));
// console.log(arr);


// //Sorts an array in place. This method mutates the array and returns a reference to the same array.
// var arr=["manu",2,5,9,"javaScript",37.3,true]
// console.log(arr);
// console.log(arr.sort((a,b)=>a-b));
// console.log(arr);


// //Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result,
// //and is provided as an argument in the next call to the callback function.
// var arr=[1,2,5,9,3,37.3]
// console.log(arr);
// console.log(arr.reduce((a,b)=>{return a+b}));
// console.log(arr);


// //Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// //Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
var arr=[1,2,5,9,10,37.3]
console.log(arr);
console.log(arr.reduceRight((a,b)=>{return a+b}));
console.log(arr);
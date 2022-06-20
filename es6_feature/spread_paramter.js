//combining the exsisting array
var arr1=[10,20,30]
var arr2=[40,50,60]
var arr3=[...arr1,...arr2]
console.log(arr3);

//combining the array with single element
var arr4=[10,20,30]
var arr5=[...arr4,40]
console.log(arr5);

//copying the objects using spread parameter
var myname={
    fname:"manohara",
    lname:"reddy",
    age:24
}
var edu={...myname,
    collage:"vemana",
    duretion:"4years",
    age:25
}
console.log(edu);


//combining two objects
var data1={...myname,...edu}
console.log(data1);


//combining two objects
var myname={
    fname:"manohara",
    lname:"reddy",
    age:24
}
var edu={
    collage:"vemana",
    duretion:"4years",
    age:25
}
var data={...myname,...edu}
console.log(data);


//combining object and array
var data2={...myname,...arr1}
console.log(data2);
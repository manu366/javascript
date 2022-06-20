
var pro=new Promise((resolve,reject)=>{
    var x="tys"
    var y="tys"
    if (x==y) {
        resolve("x and y are same")
    } else {
        reject("x and y not same")
    }
})

pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})
async function sync() {
    console.log("start");
    var pro=new Promise((resolve,reject)=>{setTimeout(()=>{resolve("in progress")},2000)})
    await pro.then((mesg)=>{console.log(mesg);}).catch((mesg)=>{console.log(mesg);})
    var pro=new Promise((resolve,reject)=>{setInterval(()=>{resolve("on going")})},2000)
    await pro.then((mesg)=>{console.log(mesg);}).catch((mesg)=>{console.log(mesg);})
    console.log("end");
}sync()
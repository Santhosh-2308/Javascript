// const { timeout } = require("async")
/*var x = 300;
console.log(x)
x=100
setTimeout(() => {
    console.log(x)
}, timeout=5000);

x=500;
console.log(x)


setInterval(() => {
    console.log(x)
}, interval=1000);

let data = new Promise((res, rej) => {
    setTimeout(() => {
        res("Resolved")
    }, 2000)
})

data.then((msg) => {
    console.log(msg)
})
     
let p = new Promise((res,rej)=>{
    let marks = 86;
    if (marks>=75) {
        res("Application approved")
    }
    else{
        rej("application Rejected")
    }
})
p.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
     
let fun = async ()=>{
    let msg = await "Example of async and await";
    console.log(msg)
    return msg;
}
console.log("Before async fun call")
fun()
console.log("After async fun call")


var show = async()=>{
    var pr = new Promise((res,rej)=>{
        var x = 6;
        if(x==5){
            res("Resolved")
        }
        else{
            rej("Rejected")
        }
    })

    try{
        var result = await pr
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
    
}
show()
*/
async function fetchUserData(){
    try{
        var user = await fetch('https://randomuser.me/api/')
        var output = await user.json()
        console.log(output)
    }
    catch(error){
        console.log("error fetching data "+ error)
    }
}
fetchUserData()
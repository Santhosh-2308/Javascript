const eventEmitter = require('events')//importing events
const customEmitter = new eventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`Hi ${name} , your form is submitted & your id is ${id}`)
})
customEmitter.emit('response',"tony",1)
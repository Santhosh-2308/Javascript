const fs = require('fs')

fs.unlink("text.txt ",(err)=>{
    console.log(err)
})
// write , append ,rename , unlink
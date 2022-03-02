const fs = require('fs');

const showFileContent = (error,file)=>{
    if(error) console.log(error) 
    else console.log(file)
}

const showFileName = async (err, data) => {
    if(err) console.log(err);
    else {
        data.forEach(element => {
            console.log(element)
            fs.readFile(element,'utf-8',showFileContent)
        })
    }
}

fs.readdir('./',showFileName)
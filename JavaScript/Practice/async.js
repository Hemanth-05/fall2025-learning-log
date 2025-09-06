const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, "message.txt");
const newFileName = path.join(__dirname, "message2.txt");

fs.readFile(fileName, "utf8", (error, result) => {  // Reading a file
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
})

fs.writeFile(newFileName, "This is the async demo", (error) => { // Writing to a file
    if(error){
        console.log(error);
    }
})

fs.appendFile(newFileName, "\n\n Appended Data Boy", (err) => { //Appending a file
    if(err){
        console.log(err);
    }
    else{
        console.log("Data Appended");
    }
})

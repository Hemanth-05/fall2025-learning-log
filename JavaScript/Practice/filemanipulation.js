const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');

try{
    if(fs.existsSync(filePath)){
        const Data = fs.readFileSync(filePath, 'utf8');
        console.log(Data)
    } else{
        console.log("File not found")
    }
} catch(error){
    console.log(error);
}

// Writing to a file
const newFilePath = path.join(__dirname, "messageNew.txt")
const dataToInclude = 'This is the new 430 data that goes into the new file.';
try{
    fs.writeFileSync(newFilePath, dataToInclude)
}catch(error){
    console.log(error)
}

//Appending to a file
try{
    fs.appendFileSync('messageNew.txt', ' data to append');
    console.log('The "data to append" was appended to file!');
}catch(error){
    console.log(error)
}
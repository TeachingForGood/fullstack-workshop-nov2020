var fs = require("fs");

readLocalFile = async() => {
    const { readFile } = require('fs').promises
    let data = await readFile('input.txt', { encoding: 'utf8' })
    console.log(data.toString());
    console.log("Program Ended");
};


readLocalFile();
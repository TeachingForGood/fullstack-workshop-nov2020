const { readFile } = require('fs').promises;

readLocalFile = async() => {
    try {
        let data;
        try {
            data = await readFile('microservices/products/src/call-backs/input.txt', { encoding: 'utf8' });
        } catch (err) {
            console.error("Error reading file", err);
        }

        //console.log(data.toString());
        console.log((data !== undefined)? data.toString(): 'No Data');
        console.log("Program Ended 1");
    } catch (err) {
        console.error("Error in program: " , err);
    }
};

readAnotherFile = async() => {
    try {
        let data;
        try {
            data = await readFile('microservices/products/src/call-backs/output.txt', { encoding: 'utf8' });
        } catch (err) {
            console.error("Error reading file", err);
        }

        //console.log(data.toString());
        console.log((data !== undefined)? data.toString(): 'No Data');
        console.log("Program Ended 2");
    } catch (err) {
        console.error("Error in program: " , err);
    }
};


readLocalFile();
readAnotherFile();
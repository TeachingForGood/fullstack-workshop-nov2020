const { readFile } = require('fs').promises;

readLocalFile = async() => {
    try {
        let data;
        try {
            data = await readFile('input.txt', { encoding: 'utf8' });
        } catch (err) {
            console.error("Error reading file", err);
        }

        //console.log(data.toString());
        console.log((data !== undefined)? data.toString(): 'No Data');
        console.log("Program Ended");
    } catch (err) {
        console.error("Error in program", err);
    }
};


readLocalFile();
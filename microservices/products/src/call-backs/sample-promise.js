const { readFile } = require('fs').promises;

readLocalFile = () => {
       let promiseReturned = readFile('inputjhjjh.txt', { encoding: 'utf8' });
       
       promiseReturned
       .then((data) => {
              console.log(data);
       })
       .catch((error) => { 
              console.error('Got error reading file: ', error);
       });

       console.log("Program Ended");
}

readLocalFile();
const { readFile } = require('fs').promises

readLocalFile = () => {
       let promiseReturned = readFile('input.txt', { encoding: 'utf8' });
       
       promiseReturned
       .then((data) => {
              console.log(data);
       })
       .catch((error) => { 
              console.error(error)
       });

       console.log("Program Ended");
}

readLocalFile();
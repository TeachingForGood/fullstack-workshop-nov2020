const { readFile } = require('fs').promises

readLocalFile = () => {
       readFile('input.txt', { encoding: 'utf8' })
       .then((data) => {
              console.log(data)
       })
       .catch((error) => { 
              console.error(error)
       });
       console.log("Program Ended");
}

readLocalFile();
const fs = require('fs');

//const data = fs.readFileSync('./App.js', 'utf8');

fs.writeFile('./App.js', '//I am comment', { flag: 'a' }, (error, data) => {

    if (error)
        return false;
    console.log(data)
});

console.log("I am after async read file");
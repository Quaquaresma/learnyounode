const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function callback(err, str) {
    if(!err)
        console.log(str.split('\n').length - 1);
    
});

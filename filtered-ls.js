const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function callback(err, list) {
    if(!err) {
        list.forEach(element => {
            if (path.extname(element) === '.' + process.argv[3])
                console.log(path.basename(element));
        });
    }
})
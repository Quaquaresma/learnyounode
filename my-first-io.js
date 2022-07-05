const fs = require('fs');

let bfr = fs.readFileSync(process.argv[2]);
const str = bfr.toString();

console.log(str.split('\n').length - 1);
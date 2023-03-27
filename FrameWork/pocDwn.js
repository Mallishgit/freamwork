var fs = require('fs');
const path=require('path');
const paths=path.join(__dirname,'Generate/newFl.js')
fs.appendFile(paths, 'Shiva Sharanu', function (err) {
  if (err) throw err;
  console.log(paths);
}); 

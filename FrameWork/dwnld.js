var express = require('express');
var router = express.Router();
var path = require('path');

// ...

router.get('/:id/download', function (req, res, next) {
	 const paths=path.join(__dirname,'Generate/')
    //var filePath = "/my/file/path/..."; // Or format the path using the `id` rest param
    var fileName = "report.pdf"; // The default name the browser will use

    res.download(paths, fileName);  
    console.log("file is downloaded");  
});

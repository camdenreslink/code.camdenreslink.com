var recursive = require("recursive-readdir");
var minimatch = require("minimatch");
var path = require('path');
var sharp = require('sharp');

recursive("content",  function (err, files) {
    var headerPaths = files.filter((file) => minimatch(file, "**/header-img.*"));
    for (let i = 0; i < headerPaths.length; i++) {
        var headerPath = headerPaths[i];
        var headerPathSplit = headerPath.split('\\');
        var thumbnailPath = `static\\img\\thumbnails\\${headerPathSplit[1]}\\${headerPathSplit[2]}.png`
        sharp(headerPath)
            .resize(400, 400)
            .max()
            .toFile(thumbnailPath, function(err) {
                if (err !== null) {
                    console.log(err);
                }
            });
    }
});
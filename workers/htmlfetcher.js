var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var urlParser = require('url');

// Use the code in `archive-helpers.js` to actually download the urls
// that are waiting.
var urls = archive.paths.list.split('\n');
console.log('URLS', urls);
archive.downloadUrls(urls);




// exports.downloadUrls = function(urlArr) {
//   for (var i = 0; i < urlArr.length; i++) {
//     if (!urlArr[i]) {
//       return;
//     }
//     var file = fs.createWriteStream(urlArr[i]);
//     request('http://' + urlArr[i]).pipe(fs.createWriteStream(exports.paths.archivedSites + '/' + urlArr[i]));
//   }
// };



// this is where we invoke the helper function downloadUrls
  // when is it supposed to be invoked?
    //
  // what pages does this connect to?
    // archive-helpers, request-handler, the sites folder
  //



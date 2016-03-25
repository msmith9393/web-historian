var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers'); // Helper functions

exports.headers = headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};


// exports.sendResponse = function(res, obj, status) {
//   status = status || 200;
//   response.writeHead(status, headers);
// };

// exports.collectData = function(req, callback) {
//   var data = '';
//   req.on('data', function(chunk) {
//     data += chunk;
//   });
//   req.on('end', function() {
//     callback(data);
//   });
// };

exports.serveAssets = function(res, asset, callback) {
  //asset is given by the server and represents some sort of web page to serve
  
};
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  


                                                    
// As you progress, keep thinking about what helper functions you can put here!

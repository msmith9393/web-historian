var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers');
var urlParser = require('url');

exports.handleRequest = function (req, res) {
  // var parts = urlParser.parse(req.url).pathname;
  // console.log(parts);
  if (parts === req.url) { //<-- this is ALWAYS true, need to find way to specify correct url target
    if (req.method === 'GET') {
      if (req.url === '/') {
        res.writeHead(200, httpHelpers.headers);
        fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
          if (err) {
            console.log('nope nope nope ', err);
          } else {
            res.end(data);
          }
        });
      } else {
        var urlPath = req.url;
        res.writeHead(200, httpHelpers.headers);
        fs.readFile(archive.paths.archivedSites + req.url, 'utf8', function(err, data) {
          if (err) {
            console.log('URL ERROR ', err);
          } else {
            res.end(data);
          }
        });
      }
    } else if (req.method === 'OPTIONS') {
      res.writeHead(200, httpHelpers.headers);
      res.end();
    }
  } else {
    res.writeHead(404, httpHelpers.headers);
    res.end('non-existent file');
  }
};

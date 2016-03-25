var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelpers = require('./http-helpers');
var urlParser = require('url');

var sitesListUrl = ''

// console.log('LIST OF URLS', archive.readListOfUrls());

exports.handleRequest = function (req, res) {
  var parts = urlParser.parse(req.url);

  if (req.method === 'GET') {
    if (req.url === '/') {
      res.writeHead(200, httpHelpers.headers);
      fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', function(err, data) {
        if (err) {
          res.writeHead(404, httpHelpers.headers);
          res.end('ERROR IN ROOT GET');
        } else {
          res.end(data);
        }
      });
    } else if (archive.paths.archivedSites + req.url) {
      res.writeHead(200, httpHelpers.headers);
      fs.readFile(archive.paths.archivedSites + req.url, 'utf8', function(err, data) {
        if (err) {
          res.writeHead(404, httpHelpers.headers);
          res.end('ERROR IN ARCHIVED GET');
        } else {
          res.end(data);
        }
      });
    }
  } else if (req.method === 'POST') {
    var dataStr = '';
    req.on('data', function(chunk) {
      dataStr += chunk;
    });
    req.on('end', function() {
      var url = dataStr.split('=')[1] + '\n';
      var simplerAppend = function(url) {
        fs.appendFile(archive.paths.list, url, 'utf8', function(err) {
          if (err) {
            console.log('ERROR');    
          } else {
            console.log(url, 'was ADDED to ', archive.paths.list);
          }
        }); 
      };
      archive.addUrlToList(url, simplerAppend);
    });
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200, httpHelpers.headers);
    res.end();
  } else {
    res.writeHead(404, httpHelpers.headers);
    res.end('ERROR');
  }
};


//within GET
//3rd and 4th cases need to be:
  //3rd: valid url, no file (we then go find it)
  //4th: invalid url, return 404
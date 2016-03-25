var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var request = require('request');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!


exports.readListOfUrls = function(callback) {
  // look through archives/sites.txt and read list of urls
  fs.readFile(exports.paths.list, 'utf8', function(err, data) {
    var urlArr = data.split('\n');
    if (err) {
      console.log('ERROR in readListOfUrls');
    } else {
      callback(urlArr);
    }
  });
};

exports.isUrlInList = function(target, callback) {
  exports.readListOfUrls(function(arr) {
    var exists = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        exists = true;
      }
    }
    callback(exists);
  });
};

exports.addUrlToList = function(newUrl, callback) {
  exports.isUrlInList(newUrl, function(isInList) {
    if (!isInList) {
      callback(newUrl);
    }
  });
};

exports.isUrlArchived = function(url, callback) {
  var exists = false;
  if (exports.paths.archivedSites + url) {
    exists = true;
  }
  callback(exists);
};

exports.downloadUrls = function(urlArr) {
    // if the url is not invalid
      // save a file with the url's name in path.archivedSites
      // have the contents of that file be the correct html content
        // request data? pipe?
 
  for (var i = 0; i < urlArr.length; i++) {
    if (!urlArr[i]) {
      return;
    }
    var file = fs.createWriteStream(exports.paths.archivedSites + '/' + urlArr[i]);
    // console.log(exports.paths.archivedSites + '/' + urlArr[i]);
    request('http://' + urlArr[i]).pipe(file);
  }
};

exports.removeUrlFromList = function(urlToRemove) {
  // after url has been downloaded/saved to folder
  // find url in list and remove it

  // confirm that isUrlArchived is true
  // confirm that isUrlInList is true
  // read through list, which returns array
    // splice target url out of array
  // re-render sites.txt

};













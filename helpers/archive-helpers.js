var fs = require('fs');
var path = require('path');
var _ = require('underscore');

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

exports.readListOfUrls = function() {
  // look through archives/sites.txt and read list of urls

  // read file
  // split on each new line
  // becomes array

};

exports.isUrlInList = function(target) {
  // takes in an input url and checks if urls is in readListOf Urls

  // use readListOfUrls to 

};

exports.addUrlToList = function() {
  // takes in an input url and adds to the url list in archives/sites.txt 
};

exports.isUrlArchived = function() {
  // check if url is in archives/sites folder
};

exports.downloadUrls = function() {
  // save a file into the sites folder
};

exports.removeUrlFromList = function() {
  // after url has been downloaded/saved to folder
  // find url in list and remove it
};

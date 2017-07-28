/**
 * Implement these functions following the node style callback pattern
 */
var http = require('http');
var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(data);
    if (err) {
      callback(err);
    } else if (!data) {

      callback(err);

    } else {
      var split = data.split('\n');
      console.log(data);
      callback(err, split[0]);  
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

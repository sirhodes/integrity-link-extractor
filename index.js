// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = function(file) {
    var Promise, _, csv, fs;
    Promise = require('bluebird');
    fs = require('fs');
    csv = require('csv');
    _ = require('underscore');
    return new Promise(function(resolve, reject) {
      return fs.readFile(file, {
        encoding: 'utf8'
      }, function(err, data) {
        if (err) {
          return reject(err);
        }
        return csv.parse(data, function(err, data) {
          var links;
          if (err) {
            return reject(err);
          }
          links = data.map(function(line) {
            return line[1];
          }).slice(1);
          links = _.uniq(links);
          return resolve(links);
        });
      });
    });
  };

}).call(this);

module.exports = (file) ->
  Promise = require 'bluebird'
  fs = require 'fs'
  csv = require 'csv'
  _ = require 'underscore'
  new Promise (resolve, reject) ->
    fs.readFile file, encoding: 'utf8', (err, data) ->
      return reject err if err
      csv.parse data, (err, data) ->
        return reject err if err
        links = data
          .map (line) ->
          # for each line read, the link is in the 1 index position
            line[1]
          # strip the csv headers
          .slice 1
        links = _.uniq links
        resolve links

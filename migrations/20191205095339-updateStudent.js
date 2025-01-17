'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.addColumn('student', 'phone_number', {
    type: 'string',
    length: 15
  }, function(err) {
    if (err) return callback(err);
    db.removeColumn('student', 'dob', callback(err));
    return callback();
  });
};

exports.down = function(db) {
};

exports._meta = {
  "version": 1
};

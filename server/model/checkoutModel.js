const { model } = require('../../database');

module.exports = {
  getSeed: (id, cb) => {
    model.findById(id, (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },
};

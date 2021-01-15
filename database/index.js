const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout', {
  useNewUrlParser: true, useUnifiedTopology: true,
});

const checkoutSchema = new mongoose.Schema({
  _id: Number,
  availability: [
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
    [Number],
  ],
  maxGuests: Number,
  price: Number,
  serviceFee: Number,
  cleaningFee: Number,
});

const checkoutModel = mongoose.model('checkout', checkoutSchema);

module.exports = {
  save: (info, cb) => {
    checkoutModel.create(info, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  },
  checkoutModel,
};

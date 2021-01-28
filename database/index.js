const mongoose = require('mongoose');

const url = process.env.CONNECTIONSTRING || 'mongodb://localhost:27017/checkout';
mongoose.connect(url, {
  useNewUrlParser: true, useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Database connected:', url);
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

const checkoutSchema = new mongoose.Schema({
  _id: Number,
  availability: [
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
    [{
      dayOfWeek: Number,
      available: Number,
      day: Number,
      month: Number,
    }],
  ],
  maxGuests: Number,
  price: Number,
  serviceFee: Number,
  cleaningFee: Number,
  minStay: Number,
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
  connection: mongoose.connection,
};

/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const _ = require('underscore');
const moment = require('moment');
const faker = require('faker');
const db = require('./index.js');

const maxGuestRange = _.range(1, 14);
const priceRange = _.range(70, 500);

for (let id = 1; id <= 100; id += 1) {
  const data = {};
  data._id = id;

  let randomIndex = Math.floor(maxGuestRange.length * Math.random());
  data.maxGuests = maxGuestRange[randomIndex];
  randomIndex = Math.floor(priceRange.length * Math.random());
  data.price = priceRange[randomIndex];
  let coefficient = 3.5 + 2 * Math.random();
  data.serviceFee = Math.floor(data.price / coefficient);
  coefficient = 1.5 + 1.2 * Math.random();
  data.cleaningFee = Math.floor(data.price / coefficient);

  const availability = [[], [], [], [], [], [], [], [], [], [], [], []];

  const day1 = moment('2021-01-01');
  for (let i = 1; i <= 365; i += 1) {
    const month = day1.month();
    const day = day1.date() - 1;
    if (faker.random.boolean()) {
      availability[month][day] = 1;
    } else {
      availability[month][day] = 0;
    }
    day1.add(1, 'd');
  }
  data.availability = availability;

  db.save(data, (err, result) => {
    console.log(result);
  });
}

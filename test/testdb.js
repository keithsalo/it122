import { Car } from "../Cars.js";

// return all records
Car.find({}).lean()
  .then((cars) => {
    console.log(cars);
  })
  // eslint-disable-next-line no-undef
  .catch(err => next(err));
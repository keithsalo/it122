let cars = [
    { name : "subaru", model : "outback", year : 2014, color : "blue"},
    { name : "ford", model : "ranger", year : 2001, color : "white"},
    {  name : "audi", model : "a6", year : 2020, color : "black"},
    {  name : "jeep", model : "wrangler", year : 2009, color : "silver"},
    {   name : "honda", model : "accord", year : 2014, color : "red"}
    ];

    export const getAll = () => {
        return cars;
    }

// export individual features

    export const getItem = (name) => {
        // search the cars array
            return cars.find((car) => {
              return car.name === name;
            });
    }

console.log(cars);

export default cars;
    
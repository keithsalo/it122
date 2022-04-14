let cars = [
    { name : "subaru", model : "outback", year : 2014, color : "blue"},
    { name : "ford", model : "ranger", year : 2001, color : "white"},
    {  name : "audi", model : "a6", year : 2020, color : "black"},
    {  name : "jeep", model : "wrangler", year : 2009, color : "silver"},
    {   name : "acura", model : "accord", year : 2014, color : "red"}
    ];

    exports.getAll = () => {
        return cars;
    }

// export individual features
export let myVariable = Math.sqrt(2);
    export const myFunction = (title) => {
        // search the books array
            return books.find((book) => {
              return book.title === title;
            });
    }

console.log(cars);
    
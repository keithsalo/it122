let cars = [
    { name : "subaru", model : "outback", year : 2014, color : "blue" },
    { name : "ford", model : "ranger", year : 2001, color : "white" },
    { name : "audi", model : "a6", year : 2020, color : "black" },
    { name : "jeep", model : "wrangler", year : 2009, color : "silver" },
    { name : "honda", model : "accord", year : 2014, color : "red" }
    ];

    

    export const getAll = () => {
        return cars;
    }

// export individual features

    export const getItem = (name) => { // search the cars array
            return cars.find((car) => { // name and car
              return car.name === name
            });
    }


    
    let newCar = {name : "honda", model : "navigator", year : 2010, color : "black"};
    export const addItem = (newCar) => { // receive value of a car add car to list
                                        // dont add car that does'nt have name, or already exists 
    if (!newCar.name){ //
    return false;
    }
    if(getItem(newCar.name)) {
        return false
    } 
         cars.push(newCar);
         return true
    }
    
    // addItem(newCar)
    // console.log(cars)
    
    // console.log(cars);
    export const deleteItem = (cars) => {
    
        if(cars.indexOf(newCar) !== -1){
            alert("Value exists!")
            cars.splice(5, 1);
            return true
        }else {
            return false
        } 
         
    }
    
    
    



    console.log(cars);

export default cars;
    
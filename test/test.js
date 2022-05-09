import { expect } from 'chai';
// import cars from 'express/lib/response';
import * as cars from '../data.js';
// import * as cars from "../lib/book.js";



// const getItem = () => {
//     return { name : "subaru", model : "outback", year : 2014, color : "blue"}
// }

describe('specific car' , () => {
   
    it('getItem returns correct car' , () => {
        let result = cars.getItem("subaru");
        expect(result).to.deep.equal(
            { name : "subaru", model : "outback", year : 2014, color : "blue"}
            )
        }); 
        it("fails to return car", () => {
            let result = cars.getItem("lie");
            
            expect(result).to.be.false;
        });
   


    it("adds a new car", () => {
        let result = cars.addItem({name : "lincoln", model : "navigator", year : 2010, color : "black"});
        expect(result).to.be.true;
    });
    it("fails to add an existing car", () => {
        let result = cars.addItem({name : "subaru", model : "navigator", year : 2010, color : "black"});
        expect(result).to.be.false;
    });

    it("deletes an existing car", () => {
        let result = cars.deleteItem("honda");
        expect(result).to.be.true;
    });
    it("fails to delete an invalid car", () => {
        let result = cars.deleteItem("tesla");
        expect(result.deleted).to.be.false;
    });

});

// describe("car", function() {
    
//     it("returns specific", function() {
//         let result = cars.getItem("subaru");
//         expect(result).to.deep.equal({ name : "subaru", model : "outback", year : 2014, color : "blue"});
//     });
    
//     it("fails to return an w/ invalid book", function() {
//         let result = cars.getItem("liar");
//         expect(result).to.be.undefined;
//     });
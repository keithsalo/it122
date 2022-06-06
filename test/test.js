/* eslint-disable no-undef */
import { expect } from 'chai';

import * as cars from '../data.js';




describe('specific car' , () => {
   
    it('getItem returns correct car' , () => {
        let result = cars.getItem("subaru");
        expect(result).to.deep.equal(
            { name : "subaru", model : "outback", year : 2014, color : "blue"}
            )
        }); 
        it("fails to return car", () => {
            let result = cars.getItem("notacar");
            
            expect(result).to.not.equal;
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
        expect(result).to.be.equal;
    });
    it("fails to delete an invalid car", () => {
        let result = cars.deleteItem("tesla");
        expect(result.deleted).to.not.equal;
    });



});

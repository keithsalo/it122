/* eslint-disable no-unused-vars */
import express from 'express';
import { Car } from "./Cars.js";
import cors from 'cors';
import  path from 'path';
import { dirname } from 'path'; //
import { fileURLToPath } from 'url';
import { name } from 'ejs';




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);//



const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.set('view engine', 'ejs'); // set the view engine to ejs
// app.use(express.static('public')); // set location for static file
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.use(express.json()); //Used to parse JSON bodies


app.get('/', (req, res, next) => {
    Car.find({}).lean()
      .then((cars) => {
        // respond to browser only after db query completes
        res.render('react', {cars: JSON.stringify(cars)});
      })
      .catch(err => next(err))
});

//detail route
app.get('/detail', (req,res) => {
    // db query can use request parameters
    Car.findOne({ name:req.query.name }).lean()
        .then((car) => {
            res.render('details', {result: car} );//change to res.json +all api routes
        })
        .catch(err => { return res.status(500).send('Error occurred: database error.')} );
});





app.get('/api/cars', (req, res, next) => {
    Car.find({}).lean()
      .then((cars) => {
        // respond to browser only after db query completes
        res.json(cars);
      })
      .catch(err => next(err))
});


// api detail route
app.get('/api/cars/:name', (req,res) => {
    // db query can use request parameters
    Car.findOne({ name:req.params.name }).lean()
        .then((car) => {
            res.json(car);
        })
        .catch(err => { return res.status(500).send('Error occurred: database error.')} );
});

// api delete route -- 
app.get('/api/delete', (req,res) => {
   // db query can use request parameters
   Car.deleteOne({ name:req.query.name }).lean()
   .then(() => {
       
       res.json(req.params.name + ' deleted'  .name + ' from database');
   })
   .catch(err => { return res.status(500).send('Error occurred: database error.')} );
});


//  api add route
app.post('/api/add', (req,res) => {
    // db query can use request parameters
    const newCar = {'name':'volvo', 'model':'v70', 'year': 2005, 'color':'white' }
    Car.updateOne({'name':'volvo'}, newCar, {upsert:true}).lean()
         .then((car) => {
            res.json(car);
        })
        .catch(err => { return res.status(500).send('Error occurred: database error.')} );
});


 // define 404 handler
 app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });

   app.listen(app.get('port'), () => {
    console.log('Express started');
   });

   
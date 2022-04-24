import * as data from './data.js'
import http from 'http';
import fs from 'fs';
import { parse } from "querystring";
import express from 'express';

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
app.use(express.static('public')); // set location for static file


// send static file as response
   app.get('/', (req,res) => {
    
    
    res.render('home', {cars:data.getAll()});
    
    // res.sendFile(path.join(__dirname, 'home.html'));
   });
   
   // send plain text response
   app.get('/detail', (req,res) => {
    
    console.log(req.query);
    // res.end("Detail for " + req.query.name)
    // res.send('Detail page');
    // res.render("details", {result:data.getItem('name')}); // render template in views dir
    let result = data.getItem(req.query.name);
    res.render('details', {model: req.query.model, result: result });
    // res.sendFile(path.join(__dirname, 'details.html'));
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

/*
http.createServer((req,res) => {
    var path = req.url.toLowerCase();
console.log(path)
let parts = req.url.split("?"); // separate route from query string
let query = parse(parts[1]); // convert query string to a JS object
console.log(parts) // check 1st half of url
console.log(query) // check 2nd half of url
    switch(parts[0]) {  // using first half of url
        
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getAll())) // converts to a string
            break;
        
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getItem(query['name']))) // converts to a string
           

            break;

        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('I am in the Web Development program this is my fifth quarter and have only taken online classes so far.  I work full time and am taking two classes a quarter.   I love the outdoors and hiking. Unfortunately with a busy schedule it can be challenging to make time for these things.');
            break;

        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);
*/
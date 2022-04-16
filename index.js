import * as data from './data.js'
import http from 'http';
import { parse } from "querystring";




http.createServer((req,res) => {
    var path = req.url.toLowerCase();
console.log(path)
let parts = req.url.split("?"); // separate route from query string
let query = parse(parts[1]); // convert query string to a JS object
console.log(parts)
console.log(query)
    switch(parts[0]) {  // using first half of url
        
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getAll()))
            break;
        
        case '/detail':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getItem(query['name'])))
           

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

import mongoose from 'mongoose';
import {connectionString} from  './credentials.js';
const { Schema } = mongoose;



mongoose.connect(connectionString, {
    dbName: 'projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const carSchema = new Schema({
 title: { type: String, required: true },
 name: String,
 model: String,
 year: Number,
 color: String
});


export const Car = mongoose.model('Car', carSchema);


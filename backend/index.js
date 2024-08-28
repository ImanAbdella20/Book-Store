import express from 'express';
import {PORT , mongourl} from "./config.js";
import mongoose from 'mongoose';
import {Book} from './model/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
app.use(cors());


app.get("/" , (req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome!');
})

app.use('/books', booksRoute);


mongoose
.connect(mongourl)
.then(() => {
    console.log('App is connected to the database');
    app.listen(PORT, ()=>{
        console.log(`App is listening to port: ${PORT}`)
     });
})
.catch((error) => {
console.log(error);
})

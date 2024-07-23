import express from 'express';
import cors from 'cors'
const app = express();

import dotenv from 'dotenv'
dotenv.config({path:"config/config.env"})
const port = process.env.PORT || 7000
app.listen(port , ()=>{
    console.log(`Express in runing on port ${port}`);
})

app.use(cors());
app.use(express.json());

import connectDatabase from './config/dbconnect.js';
connectDatabase();




import productRoute from './routes/products.js';

app.use("/products", productRoute)
import express from 'express';
import products from './data/Products.js';
import dotenv from "dotenv";
import connect from './mongodb.js';
import ImportData from "./DataImport.js";

dotenv.config();
connect();
const app = express();


app.use("/api/import", ImportData);



//load product from servers

app.get("/api/products",(req, res) => {
    res.send(products);
});

//load single product from servers

app.get("/api/products/:id",(req, res) => {
    const product = products.find((p) => {
        p._id === match.params.id;
        res.json(product);
    });
});


app.get("/",(req, res) => {
    res.send("running on 3001")
});

app.listen(3001, console.log("3001 lol"));
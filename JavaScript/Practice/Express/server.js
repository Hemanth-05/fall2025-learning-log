import express from 'express';
import {join, dirname} from 'path';
import { fileURLToPath } from "url";


const port = 8080;
const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);
const fileName = join(__dirname, "public", "about.html");

const app = express();

app.get("/", (req, res)=>{
    res.send("Whats up Bro");
});

app.get("/about", (req, res)=>{
    res.sendFile(fileName);
});

app.get("/about/:name/:id", (req, res) =>{
    console.log(req.params);
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});
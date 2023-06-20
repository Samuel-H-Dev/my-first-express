
import express from "express";
import { get } from "https";
import send from "send";

const app = express();
app.use(express.json());

///list of allowed requests 
app.get("/test",(request, response) => {
response.send("Hello There!");
});                   ///any express functions have at least 2 parameters which are (request, response)

const fruits = ['apple', 'banana', 'cherries', 'orange']

app.get("/fruits", (req,res) => {
    res.send(fruits);           //automatically adds stats 200              ///use https://http.cat/(numbers) to check what number means
})

app.post("/fruits", (req,res) => {
    const newFruit = req.body.fruit;
    fruits.push(newFruit);
    res.status(201).send(fruits);
})

//what port to watch / listen to:


app.listen(3000, () => {
    console.log("Listening on http://localhost:3000/...");
});


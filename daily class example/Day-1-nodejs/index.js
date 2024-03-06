import express from 'express';

const app = express();

const PORT = 4000;

// app.use() //middleware

//getcall 
app.get('/', (req,res) => {
    res.status(200).json({message: "Hai my dear mentor, we will work to become a FSD developer"})
}) 

app.get('/get-data', (req,res) => {
    res.status(200).json({message: "data", data:{name:"Bavithra"}})
}) 

//running 
app.listen(PORT, () => {
    console.log(`App i running in the port = ${PORT}`);
}) 
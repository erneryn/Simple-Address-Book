"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const index = require('./routes/index')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',index)

app.use((err,req,res,next)=>{

    if(err.name == 'ValidationError'){
        var Error=[]
        for (const error in err.errors){
            Error.push(err.errors[error].message)
        }
        res.status(400).send({"validation Error": Error })
    } else {
        res.status(500).json({ "message": "internal server error !"})
    }
})

mongoose.connect("mongodb://localhost:27017/book", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongodb connection successfuly !");
});

app.listen(PORT, () => {
  console.log("listening to port " + PORT);
  console.log(`http://localhost:${PORT}`)
});

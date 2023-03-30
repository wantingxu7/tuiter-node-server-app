// const express = require('express')
import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from 'mongoose';

// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

console.log("console log")
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
  || 'mongodb://127.0.0.1:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
console.log("console after log")

const app = express()


app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000)
// app.listen(4000)
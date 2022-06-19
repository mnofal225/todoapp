// server.js
require("dotenv").config(); //added
const express = require("express");

const connectDB = require("./config/db"); //added

const app = express();

// routes
const todo = require("./routers/todo") // added

// connect database
connectDB();//added

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use the routes
app.use("/api/todo", todo) 

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
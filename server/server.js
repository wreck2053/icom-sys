require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your actual front-end domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connected to database!"));

app.use(express.json());

const routes = require("./routes");
app.use("/", routes);

app.listen(process.env.SERVER_PORT, () =>
  console.log("Server running on port " + process.env.SERVER_PORT)
);

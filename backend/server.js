const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require('cors');

const port = process.env.PORT || 5002;

const app = express();

//db
const connectDB = require("./config/db");
connectDB();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routing
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

//error handling
app.use(errorHandler);
//server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

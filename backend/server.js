const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
const goalRoutes = require("./routes/goalRoutes");
app.use("/api/goals", goalRoutes);


//error handling
app.use(errorHandler)
//server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

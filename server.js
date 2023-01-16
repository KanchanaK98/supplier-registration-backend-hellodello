const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();


const dbConnection = require("./config/connectDataBase");

// require routes
const createSupplier = require("./routes/createSupplier")
const sendEmail = require("./routes/sendEmails")

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.PORT || 8070;

dbConnection();


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
});

// use routes
app.use("/supplier",createSupplier);
app.use("/email",sendEmail);
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./src/router/info.routes.js")
const bodyParser = require("body-parser")

const app = express();

// Settings



app.set("port", process.env.PORT || 80);

app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use(router)

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
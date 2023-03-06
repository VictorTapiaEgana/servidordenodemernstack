const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();
const { mongoose } = require("./database");
const port = process.env.PORT || 3001;

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/task", require("./routes/task.routes"));

//Starting Server
app.listen(port, () => {
  console.log(`Servidor en Puerto ${port}`);
});

//Static Files
//  app.use(express.static(path.join(__dirname, '..')));
//  console.log(path.join(__dirname, '..'));   //BORRAR

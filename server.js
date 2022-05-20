const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const uploadFiles = require('./app/services/upload_image.js');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//CORS SEGMENT
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to onQuest application." });
});

app.use(express.static(__dirname + '/uploads/'));
require("./app/routes/user.routes.js")(app);
app.use("/upload", uploadFiles);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

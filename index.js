const express = require('express');
const app = express();
const PORT = 4000;
const cors = require ("cors");


let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(express.json());

app.use(cors(corsOptions));

const db = require('./db');

app.get('/welcome', (req, res) => {
    return res.send("Bienvenido a mi app")
})

const router = require('./router');
app.use(router);

db.then(() => {

    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));   
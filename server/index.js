require('dotenv').config();
const express = require('express');
const PORT = process.env.SERVER_PORT;
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const router = require('./router/router')

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin:process.env.CLIENT_URL
}));

app.use('/api', router);

const startServer = async () => {
    try {
        await app.listen(PORT, () =>
            console.log(`Server start at port ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

startServer();
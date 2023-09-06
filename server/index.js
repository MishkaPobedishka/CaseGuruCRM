require('dotenv').config();
const express = require('express');
const PORT = process.env.SERVER_PORT || 5000;
const app = express();

const startServer = async () => {
    try {
        await app.listen(PORT, () =>
            console.log(`Server start at port ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

startServer();
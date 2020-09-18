const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send("This is the freaking homepage blabla");
})

app.listen(PORT, () => {
        console.log("WAZAAAP");
});
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("This is the freaking homepage blabla");
})

app.listen(PORT, () => {
        console.log("WAZAAAP");
});
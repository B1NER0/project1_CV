const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is the freaking homepage blabla");
})

app.listen(8080, () => {
        console.log("WAZAAAP");
});
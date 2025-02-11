const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hello from my server');
});

app.listen(5000, ()=>{
    console.log('listening on port 5000');
});
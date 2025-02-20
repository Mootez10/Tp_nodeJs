const express = require('express');

require('./config/connect');

const app = express();
app.use(express.json());

// Import user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});
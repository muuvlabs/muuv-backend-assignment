const express = require('express');
const RoutesIndex = require('./routes/index.routes');


const app = express()
app.use(express.json());
app.use('/', new RoutesIndex().init());
app.listen(3000, ()=> console.log('Server running on port 3000'))
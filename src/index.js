const express = require('express');
const app = express();

// Middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// Config data format
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Port
app.set('port', process.env.PORT || 3000);

// Route
app.get('/', (req, res) => {
   res.send('GET Response JQ');
});

// Server
app.listen(app.get('port'), () =>   {
    console.log(`iniciado en el puerto ${app.get('port')}`);
});
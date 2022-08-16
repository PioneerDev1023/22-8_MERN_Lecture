var express = require('express');
const cors = require('cors');
var app = express();

app.use(cors());

// app.get('/', function (req, res) {
//     res.send("Hello World");
// });

app.use('/login', (req, res) => {
    res.send("Okay");
});

app.listen(5000, () => console.log('API is running on http://localhost:8080/login'));

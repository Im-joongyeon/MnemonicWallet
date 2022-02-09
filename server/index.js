
const express = require('express');
const app = express();
const port = 4000;
const indexRouter = require('./routes');
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());
app.use('/', indexRouter);

app.listen(port, ()=> {
    console.log("Listening Port", port);
})


module.exports = app;
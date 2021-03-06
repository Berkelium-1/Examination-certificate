const express = require('express');
const indexRouter = require('./routes/index');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由
app.use('/', indexRouter);

app.listen('3000', () => {
    console.log('http://localhost:3000');
});
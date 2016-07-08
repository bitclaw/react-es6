require('babel-register')({
    presets: [ 'es2015' ]
});

import express from 'express';

let app = express();

app.get('/', (req,res) => res.send('Hello Express!'));

app.listen(3000);

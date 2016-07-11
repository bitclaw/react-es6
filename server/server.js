import http from 'http';
import express from 'express';

let app = express();

app.server = http.createServer(app);
app.get('/',(req,res) => res.send('Hello express!'));
// Assets
app.use(express.static('public'));

// Listen
app.server.listen(process.env.PORT || 3000);
console.log('Server running at http://127.0.0.1:3000/');
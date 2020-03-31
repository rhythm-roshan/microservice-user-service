const express = require('express')
const app = express()
const port = 7000

const fs = require('fs');

let rawdata = fs.readFileSync('user.json');  
let user = JSON.parse(rawdata);  

app.get('/user/1', (req, res) => res.send(JSON.stringify(user[0])));

app.use(express.static('public'));

app.listen(port, () => console.log(`User Service is running on ${port}!`));
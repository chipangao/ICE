const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(_dirname ='/dist/<name-of-app>'));

app.listen(process.env.PORT||8080);

app.get('/*',function*(req,res){
    res.sendFile(path.join(_dirname +'/dist/<name-of-app>/index.html'));
})
app.listen(process.env.PORT||8080)

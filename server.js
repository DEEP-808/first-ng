const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/dist/first-ang'));

app.get('/0',(req,res)=>{
    res.sendFile(__dirname+'/dist/first-ang/index.html');
})

app.listen(port,()=>{
    console.log("Server started at localhost:"+port);
})
const express = require('express');
const app= express();
const path= require('path');
const publicPath = path.resolve(__dirname,'./public');
const PORT = process.env.PORT||4001;
app.use(express.static(publicPath));

app.listen(3031, () => console.log("running on port 3031"));
app.listen(PORT, ()=> console.log("esto funciona en el puerto 4001") )

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/register.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/login.html', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
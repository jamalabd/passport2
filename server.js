const express = require('express');
const app = express();



app.use(express.json())
app.use(express.urlencoded(
 {
     extended: true
 }
));

app.get('/', (req,res)=>{
    res.send('server live my guy');
})



const port = 2000;

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
})
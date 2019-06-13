const express = require("express");
const app = express();
const port = (process.env.PORT||3000);


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static("./public"));

app.get("/", (req,res)=>{

    res.send("Hello");
    res.end();

})

app.post("/adduser",(req,res)=>{

    
    res.status(200).json(req.body);
    res.end();

})

app.listen(port,()=>{
    console.log(`Listening on port ${port} ....`);
})
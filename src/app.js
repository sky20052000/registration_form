const express =  require('express');
const app = express();
const path = require('path');
require("./db/conn");
const port =8000;
const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));

app.get("/",(req,res)=>{
   res.render("index");
})


app.listen(port,()=>{
    console.log(`Listening of the ${port} port`);
})
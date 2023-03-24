const express = require('express')
const app = express();
const cors = require('cors')
var bodyParser = require('body-parser');



app.use(bodyParser.json()) 
app.use(express.static('public'));
app.use(cors()) ;

//port number 
const port = 5001;


  

//chat gpt code here....

 app.post("/chatgpt",(req,res)=> {
    res.json({message: 'hi'})
 })




// end chat gpt code  here

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
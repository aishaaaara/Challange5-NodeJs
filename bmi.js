const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/bmi", (req,res) => {
 let tinggi = Number(req.body.tinggi) 
 let berat = Number(req.body.berat)  
 let status ;


let total = berat / Math.pow(tinggi,2);
console.log(total);

if(total < 18.5){ 
    status = "Kurang"
  }else if(total >= 18.5 && total <= 24.9){
    status = "Normal (ideal)"
  }else if(total >= 25 && total <= 29.9){
    status = "Kelebihan"
  }else{
    status = "Obesitas"
  }
  
     let response = {
         tinggi: tinggi,
         berat: berat,
         total: total,
         status: status
      }
      res.json(response)
  })
 

app.listen(8000, () => {
console.log("Server run on port 8000");
    })
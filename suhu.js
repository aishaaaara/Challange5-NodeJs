const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

// end-point "/reamur" dengan method POST
 app.get("/convert/reamur/:reamur", (req,res) => {
        let reamur= req.params.reamur
        let result;
    
        let fahrenheit = ( 9/4 * reamur ) + 32
        let celius = 5/4 * reamur 
        let kelvin = 5/4 * reamur + 273
         
       
        let response = {
            reamur: reamur,
            result : result = {
            celius: celius, 
            fahrenheit: fahrenheit,
            kelvin: kelvin}
          }
       
     res.json(response)
     
    })

// end-point "/celcius" dengan method POST
app.get("/convert/celcius/:celcius", (req,res) => {
        let celcius= Number(req.params.celcius)
        let result;
    
        let fahrenheit = ( 9/5 * celcius ) + 32
        let kelvin = 273 + celcius
        let reamur = 4/5 * celcius 
        
         
       
        let response = {
            celcius: celcius, 
            result : result = {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin }
        }
       
     res.json(response)
     
    })

// end-point "/kelvin" dengan method POST
    app.get("/convert/kelvin/:kelvin", (req,res) => {
            let kelvin= req.params.kelvin
            let result;
        
            let fahrenheit = (kelvin - 273.15) * 9/5 + 32  
            let reamur =  (kelvin - 273.15) * (4/5)
            let celcius = kelvin - 273
             
           
            let response = {
                kelvin: kelvin, 
                result : result = {
                celcius: celcius,
                fahrenheit: fahrenheit, 
                reamur: reamur
                
                
            }
            }
           
         res.json(response)
         
        })
      // end-point "/fahrenheit" dengan method POST
        app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
                let fahrenheit= req.params.fahrenheit
                let result;
            
                let kelvin = (fahrenheit - 32 ) * 5/9 + 273.15  
                let reamur =  4/9 * ( fahrenheit - 32 )
                let celcius = ( fahrenheit - 32 ) * 5/9
                 
               
                let response = {
                    fahrenheit: fahrenheit, 
                    result : result = {
                    celcius: celcius, 
                    reamur: reamur,
                    kelvin: kelvin
                 }
                }
               
             res.json(response)
             
            })
    // menjalankan server pada port 8000
app.listen(8000, () => {
        console.log("Server run on port 8000");
    })
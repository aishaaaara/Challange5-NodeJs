const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") 
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

              app.get("/convert/desimal/:desimal", (req,res) => {
                let desimal = Number(req.params.desimal)

                let biner = desimal.toString(2)
                let octal = desimal.toString(8)
                let heksa = desimal.toString(16)

                let response = {
                    desimal : desimal,
                    biner : biner,
                    octal : octal,
                    heksa : heksa
                }
                      
                      res.json(response)
                  })


          app.get("/convert/biner/:biner", (req,res) => {
              let biner = Number(req.params.biner)
            
              let desimal = biner.toString(10)
              let octal = biner.toString(8)
              let heksa = biner.toString(16)
            
              let response = {
                  biner : biner,
                  desimal : desimal,
                  octal : octal,
                  heksa : heksa
              }
                    
                    res.json(response)
                })

          app.get("/convert/octal/:octal", (req,res) => {
            let octal = Number(req.params.octal)
          
            let desimal = octal.toString(10)
            let biner = octal.toString(2)
            let heksa = octal.toString(16)
          
            let response = {
                octal : octal,
                desimal : desimal,
                biner : biner,
                heksa : heksa
            }
                  
                  res.json(response)
              })
              app.get("/convert/octal/:octal", (req,res) => {
            let octal = Number(req.params.octal)
          
            let desimal = octal.toString(10)
            let biner = octal.toString(2)
            let heksa = octal.toString(16)
          
            let response = {
                octal : octal,
                desimal : desimal,
                biner : biner,
                heksa : heksa
            }
                  
                  res.json(response)
              })
              app.get("/convert/heksa/:heksa", (req,res) => {
                let heksa = Number(req.params.heksa)
              
                let desimal = heksa.toString(10)
                let biner = heksa.toString(2)
                let oktal = heksa.toString(8)
              
                let response = {
                    heksa : heksa,
                    desimal : desimal,
                    biner : biner,
                    oktal : oktal
                }
                      
                      res.json(response)
                  })

        app.listen(8080, () => {
                console.log("Server run on port 8000");
            })
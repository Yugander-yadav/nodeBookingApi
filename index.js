const express=require("express")

const hotelRouter=require("./router/hotel")
const mongodb=require("./connect")

mongodb.connect()
const app=express()
app.use(express.json())

app.use("/",(req,res,next)=>{
   console.log("server started")
   



    next()
})


app.use("/hotel",hotelRouter)
app.listen(3000)
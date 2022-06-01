const mongoClient=require("../connect")

module.exports.getRoomData= async(req,res,next)=>{

const data = await(mongoClient.selectedDb.collection("room").find({},{_id:0}).toArray())
const sample=[]
data.map((e)=>{
    sample.push({room_id:e["room_id"],seats:e["no_of_seats"],facilites:e['facilites'],status:e['status']})
})

res.send(sample)
}


module.exports.createRoom=async(req,res,next)=>{
try{
    // const newRoom = await(mongoClient.selectedDb.collection("hotel").insertOne(req.body.addRoom))
    // res.send(newRoom)
const newRoom = await(mongoClient.selectedDb.collection("room").insertOne(req.body.room))
res.send(newRoom)
}
catch(err){
    res.status(500).send(err)
console.log(err)
}
}

module.exports.bookRoom=async(req,res,next)=>{
    try
    {
        const data=req.body.booking
        const booking=await(mongoClient.selectedDb.collection("bookedRooms")).insert({...req.body.booking,start_date:new Date("2022-06-01T16:00:00Z"),end_date: new Date("2022-06-01T17:00:00Z")})

        const updateRooms = await(mongoClient.selectedDb.collection("room").findOneAndUpdate({room_id:data["room_id"]},{$set:{status:"booked"}}))
        const bookedUser = await(mongoClient.selectedDb.collection("customers")).insert({...req.body.booking,start_date:new Date("2022-06-01T16:00:00Z"),end_date: new Date("2022-06-01T17:00:00Z")})
        
        res.send("success")
        // res.send(req.body.booking["price"])
    }catch(err){
        res.status(500).send(err)
        console.log(err)

    }
}

module.exports.getBooked=async (req,res,next)=>{
    try{
            const data = await(mongoClient.selectedDb.collection("bookedRooms").find().toArray())
            res.send(data)
    }
    catch(err){
            console.log(err)
            res.status(500).send(err)
    }
}

module.exports.getCustomers=async(req,res,next)=>{
    try{
        const data = await(mongoClient.selectedDb.collection("customers").find().toArray())
        res.send(data)
    }catch(err){
        console.log(err)
            res.status(500).send(err)
    }
}
const express = require("express")
const router=express.Router()
const {createRoom, getRoomData,bookRoom,getBooked,getCustomers}=require("../modules/hotel")
router.get("/bookedRooms",getBooked)
router.get("/get",getRoomData)

router.get("/bookedCustomers",getCustomers)
router.post("/createRoom",createRoom)
router.put("/bookRoom",bookRoom)
module.exports=router;


const {MongoClient}=require("mongodb")
module.exports={
    selectedDb:{},
    async connect(){
        try{
            const url="mongodb+srv://yuganderyadav:45Lrcf3yXeAZFShf@yugandercluster.whuz011.mongodb.net/?retryWrites=true&w=majority"
            const client=await MongoClient.connect(url)

            this.selectedDb=client.db("hotel")
            console.log("db connected")

        }
        catch(err){
            console.log(err)
        }
    }
}
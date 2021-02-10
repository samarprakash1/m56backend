const express=require("express")
const mongoose = require("mongoose");

const app=express();
mongoose.connect("mongodb://localhost:27017/massign",
{
    useNewUrlParser : true, useUnifiedTopology: true
}).then(()=>console.log("success")).catch((error)=>console.log(error))

const mssignSchema= new mongoose.Schema({
    cnum:{
        type: Number
    },
    expdate:{
        type : String
    },
    cvcode:{
        type: Number
    },
    cown:{
        type:String
    }
})
const mdata=new mongoose.model('mdata',mssignSchema)
const createDocument = async() =>{
    try{
        const mfifty=new mdata({
            cnum:"7867564334344554",
            expdate:"12/23",
            cvcode:'232',
            cown:'Prakash Kumar'
        })
        const result=await mfifty.save();
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
app.get("/", (req,res) =>{
res.send("HEllo" )
})
app.listen(9090,()=>{
    console.log("listing")
})
createDocument()
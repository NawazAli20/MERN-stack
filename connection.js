import mongoose from "mongoose";

const con = async ()=>{
try{
await mongoose.connect("mongodb://127.0.0.1:27017/Univ");
    console.log("mongodb connection is okay");
}catch(err){
    console.log("mongodb connection is failed");
}
}

export default con; 
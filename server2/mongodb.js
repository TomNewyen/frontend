import mongoose from "mongoose";

const connect = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("connected to db");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

export default connect;
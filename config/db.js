import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

export const  connectDB = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
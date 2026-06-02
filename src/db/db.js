import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

async function connectDB() {
    try {
        console.log(" \n Connecting to MongoDB...")
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(` \n ⚙️ MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection error", error)
    }
}

export default connectDB

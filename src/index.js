import dotenv from "dotenv"
dotenv.config({
    path :"./.env"
})
import {app} from "./app.js"
import connectDB from "./db/db.js"

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5001 , () => {
        console.log(` \n app is listening on port ${process.env.PORT || 5001}`)
    })
})
.catch((err) => {
    console.log("database connection failed",err);
    
})











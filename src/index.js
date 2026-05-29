import dotenv from "dotenv"
dotenv.config({
    path :"./.env"
})
import express from "express"

const app = express()

app.post("/", async(req,res) => {

    res.status(201).json({
        message : "OK"
            })
})

app.listen(process.env.PORT,() => {
    console.log(`Server is listening on PORT: ${process.env.PORT}`)
})


export default app
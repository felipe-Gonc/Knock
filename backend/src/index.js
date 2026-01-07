import express from "express"
import authRoutes from "./routes/auth.routes.js"
import { connectDB } from "./confg/db.js"
import dotenv from "dotenv"

dotenv.config()
const app = express()

const PORT = process.env.PORT


app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=> {
    console.log("Server rodando na PORT:" +  PORT)
    connectDB()
})


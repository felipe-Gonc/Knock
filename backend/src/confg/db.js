import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MONGO CONECTADO COM SUCESSO")
    } catch (error) {
        console.log("Erro ao conectar ao banco de dados", error)
    }
}
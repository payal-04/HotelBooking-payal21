import express, { request } from "express"
import "dotenv/config"
import cors from "cors"

const app = express()
app.use(cors()) //Enable Cross Origin Resource Sharing//

app.get('/',(req,res)=> res.send("API is working fine"))

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
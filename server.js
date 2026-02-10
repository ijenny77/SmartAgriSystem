import express from "express"
import path, { dirname } from "path";
import { fileURLToPath } from "url"; 

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

//Serving static files
app.use(express.static(path.join(__dirname, "public")))

//Routes

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"))
})

app.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "about.html"))
})

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, "public", "notFound.html"))
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
} )
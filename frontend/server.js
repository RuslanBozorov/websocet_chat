import express from 'express'
import join from 'path'
const app = express()
app.get("/",(req,res)=>{
    res.sendFile(join(process.cwd(),"index.html"))
})


app.get("/register",(req,res)=>{
    res.sendFile(join(process.cwd(),"./html/register.html`"))
})

app.get("./js/main.js",(req,res)=>{
    res.sendFile(join(process.cwd(),"./js/main.js"))
})



app.listen(9090,"0.0.0.0",()=> console.log("Frontend server is running..."))
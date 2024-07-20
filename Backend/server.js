import express from "express"


const app=express()
const port=process.env.PORT || 3000

app.get("/api/jokes", (req,res)=>{
   const jokes=[
   {
        id:1,
        title:"first joke",
        content:"this is number 1"
   },
   {
        id:2,
        title:"second joke",
        content:"this is number 2"
   },
   {
        id:3,
        title:"third joke",
        content:"this is number 3"
   },
   {
        id:4,
        title:"fourth joke",
        content:"this is number 4"
   },
   {
        id:5,
        title:"fifth joke",
        content:"this is number 5"
   }
   ]
   res.send(jokes)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
import express from "express"
import mongoose from "mongoose"
import bodyParser from "express"
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors'

const app=express()
app.use(bodyParser.json())
app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true

}))

//home testing route
app.get('/',(req,res)=>res.json({message:'this is home route'}))


//user Router
app.use('/api/user',userRouter);

// product router
app.use('/api/product',productRouter);
//cart router
app.use('/api/cart',cartRouter)
// address router

app.use('/api/address',addressRouter)

// payment Router
app.use('/api/payment',paymentRouter)





mongoose.connect("mongodb+srv://mishravikesh9525:c8f4SqK0IPSanOI0@cluster0.66wac.mongodb.net/",{
    dbName:"MERN_E_Commerce"
}

).then(()=>console.log("mongoDB connected Successfully")).catch(()=>console.log(errr))


const PORT=1000;
app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})
import express from 'express'
import mongoose from 'mongoose'
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute);
app.use(cookieParser());


// Connecting the server to the backend
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log(err)
    })












// App port
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})





// app.use('/api/user', userRouter)
// app.use('/api/auth', authRouter)

// Add a middle ware to handle errors
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500
//     const message = err.message || 'INternal Server error'
//     return res.status(statusCode).json({
//         success: false,
//         statusCode,
//         message
//     })
// })
















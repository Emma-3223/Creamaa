import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import postRoute from './routes/post.route.js'


const app = express()
app.use(express.json())
dotenv.config()

// Connecting the server to the backend
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log(err)
    })

    // middlewares
    app.use('/api/posts', postRoute)


    app.use('/api/auth/register', (req, res) => {
        res.send('it works')
    });

    app.use('/api/auth/login', (req, res) => {
        res.send('it works')
    })

    app.use('/api/auth/logout', (req, res) => {
        res.send('it works')
    })

   
    app.use('/api/auth/post', (req, res) => {
        res.send('it works')
    })
    app.use('/api/auth/22332', (req, res) => {
        res.send('it works')
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
















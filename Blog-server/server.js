const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const utils = require('./utils')
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const blogRouter = require('./routes/blog')
app.use('/user',userRouter)
app.use('/category', categoryRouter)
app.use('/blog', blogRouter)



app.listen(4000,'0.0.0.0',()=>{
    console.log('server started on port 4000')
})
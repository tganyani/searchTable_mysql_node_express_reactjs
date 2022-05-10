const express = require('express')
const cors = require('cors')

const router = require('./helpers/router')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/',router)

const port = process.env.PORT || 4000

app.listen(port,()=>console.log(`Server is up running on port: ${port}`))
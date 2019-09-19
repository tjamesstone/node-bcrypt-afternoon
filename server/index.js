require("dotenv").config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

//MIDDLE WARE
app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    })
)

//MASSIVE LISTENING

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB set')
    app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
  })
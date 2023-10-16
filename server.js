const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 1007
require('dotenv').config()

let db, 
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'first-build'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
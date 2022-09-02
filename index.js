const express = require("express")
const redis = require('redis')

const app = express()
const client = redis.createClient() 

app.get("/", (req,res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is" + visits)
  })
})

app.listen(8081, () => {
  console.log("Listening on port 8081")
})
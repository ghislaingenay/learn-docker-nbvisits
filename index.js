const express = require("express")
const redis = require('redis')

const app = express()
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
}) // Will be redirected to docker-compose file
//Port: default number
client.set("visits",  0)

app.get("/", (req,res) => {
  client.get("visits", (err, visits) => {
    res.send("Number of visits is" + visits)
    client.set("visits",Number(visits) + 1)
  })
})

app.listen(4001, () => {
  console.log("Listening on port 4001")
})
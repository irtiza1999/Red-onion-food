const express = require('express')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => {
  res.send('Server on')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gi4fd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
client.connect((err) => {
  const foodsCollection = client.db(`red-onion-restaurant`).collection('foods')
  const ordersCollection = client
    .db(`red-onion-restaurant`)
    .collection('orders')

  console.log('connected')
  app.get('/foods', (req, res) => {
    foodsCollection.find({}).toArray((err, documents) => {
      res.send(documents)
    })
  })
  app.post('/placeOrder', (req, res) => {
    const order = req.body
    ordersCollection.insertOne(order).then((result) => {
      res.send(result.insertedCount > 0)
    })
  })
})

app.listen(process.env.PORT || port)

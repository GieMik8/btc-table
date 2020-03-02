const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const port = 3001

const CURRENT_PRICE_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json'

app.use(cors())

app.get('/currentprice', async (req, res) => {
  const result = await fetch(CURRENT_PRICE_URL)
  const json = await result.json()
  res.json(json)
})

app.listen(port, () => console.log(`Bitcoin currentprice listening on port ${port}!`))

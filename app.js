const express = require('express')
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/tooltip'
const app = express()

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  app.use(express.static('./public'))
  const tips = db.collection('tips')

  app.get('/tooltips/tips', (req, res) => {
    tips
      .find({})
      .toArray()
      .then(tips => tips.json())
      .catch(err => {
        console.error(err)
        res.sendStatus(500)
      })
  })
})

app.listen(3000, () => {
  console.log('Listening on 3000!')
})

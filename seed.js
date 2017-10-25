const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost/tooltip'

MongoClient.connect(url, (err, db) => {
  if (err) {
    console.error(err)
  }
  const tips = db.collection('tips')
  tips
    .deleteMany({})
    .then(() => {
      tips
        .insertMany([
          {
            tip: 'This is a left tooltip'
          },
          {
            tip: 'This is a right tooltip'
          },
          {
            tip: 'This is a bottom tooltip'
          },
          {
            tip: 'This is a top tooltip'
          }
        ])
        .catch(err => {
          console.error(err)
        })
    })
    .then(() => console.log('Tips seeded!'))
    .then(() => db.close())
})

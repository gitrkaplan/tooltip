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
        .insertMany(
          [
            'Most soccer players run 7 miles in a game.',
            'The only 2 animals that can see behind itself without turning its head are the rabbit and the parrot.',
            'Whip makes a cracking sound because its tip moves faster than the speed of sound.',
            'It cost 7 million dollars to build the Titanic and 200 million to make a film about it.',
            'When hippos are upset, their sweat turns red.',
            'Every time you sneeze some of your brain cells die.',
            'Your left lung is smaller than your right lung to make room for your heart.',
            'Laughing lowers levels of stress hormones and strengthens the immune system. Six-year-olds laugh an average of 300 times a day. Adults only laugh 15 to 100 times a day.',
            'Chewing gum while peeling onions will keep you from crying.',
            'The Boeing 747 is capable of flying upside-down if it weren’t for the fact that the wings would shear off when trying to roll it over.',
            'Never hold your nose and cover your mouth when sneezing, as it can blow out your eyeballs.',
            'The world’s smartest pig, owned by a mathematics teacher in Madison, WI, memorized the multiplication tables up to 12.',
            'In ancient Greece, children of wealthy families were dipped in olive oil at birth to keep them hairless throughout their lives.',
            'Every Labrador retriever dreams about bananas once in a while.',
            'Approximately one-sixth of your life is spent on Wednesdays.',
            'You can actually sharpen the blades on a pencil sharpener by wrapping your pencils in aluminum foil before inserting them.',
            '111,111,111 x 111,111,111 = 12,345,678,987,654,321',
            '12 newborns will be given to the wrong parents daily.',
            '123,000,000 cars are being driven down the U.S’s highways.',
            '160 cars can drive side by side on the Monumental Axis in Brazil, the world’s widest road.',
            'A cockroach can live several weeks with its head cut off.',
            'A company in Taiwan makes dinnerware out of wheat, so you can eat your plate.',
            'A cow produces 200 times more gas a day than a person.',
            'A dime has 118 ridges around the edge.'
          ].map(tip => ({
            tip: tip
          }))
        )
        .catch(err => {
          console.error(err)
        })
    })
    .then(() => console.log('Tips seeded!'))
    .then(() => db.close())
})

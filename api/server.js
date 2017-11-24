const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.json({
    hello: 'job seekers'
  })
})

app.listen(port, () => console.log(`Started on port ${port}`))

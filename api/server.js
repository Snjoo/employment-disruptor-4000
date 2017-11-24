const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.json({
    data: [{
      title: '5 week web development mentoring program',
      description: `
        We're looking for software developers to join our mentoring program.
        On our 5 week mentoring program we'll get you up tp date with latest web development technologies such as
        React, Redux, AWS, and node.js
        Get your skills up to date with our awesome mentors!
      `,
      domain: 'IT',
      location: 'Helsinki',
      tags: ['programming', 'software', 'it', 'java', 'cobol', 'php', 'javascript'],
      image: 'https://en.wikipedia.org/wiki/Johann_Sebastian_Bach#/media/File:Johann_Sebastian_Bach.jpg'
    }]
  })
})
app.listen(port, () => console.log(`Started on port ${port}`))

const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.json({
    data: [
      {
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
      },
      {
        title: 'Re-launch your English-teaching career in Tampere',
        description: `
          We are searching for mentorees in Tampere-area Finland to get up to speed in teaching languages.   
        `,
        domain: 'Teaching',
        location: 'Tampere',
        tags: ['teaching', 'languages', 'english', 'french'],
        image: 'https://c1.staticflickr.com/8/7150/6697055189_f947d7a7a7_z.jpg'
      },
      {
        title: 'Onboarding to finnish construction work',
        description: `
          If you're an experienced construction worker or lay roads like a pro, refresh your skills and learn the Finnish ways
          of doing construction work by attending our mentoring program!
        `,
        domain: 'Construction',
        location: 'Turku',
        tags: ['construction', 'roads', 'physical'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/US_Navy_080629-N-6477M-095_Builder_3rd_Class_Merlyna_Crank_and_Builder_Constructionman_Irene_L._Reeves%2C_both_assigned_to_Naval_Mobile_Construction_Battalion_%28NMCB%29_3_Det._4%2C_place_trimming_on_birthing_spaces_being_built_for_Afg.jpg/1280px-thumbnail.jpg'
      }]
  })
})
app.listen(port, () => console.log(`Started on port ${port}`))

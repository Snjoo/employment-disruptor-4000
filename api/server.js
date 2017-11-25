const express = require('express')
const app = express()
const R = require('ramda')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
app.use(bodyParser.json())
const mentoringPrograms = [
  {
    id: 1,
    author: 'Fuzz IT',
    title: '5 week web development mentoring program',
    description: `We're looking for software developers to join our mentoring program. On our 5 week mentoring program we'll get you up tp date with latest web development technologies such as React, Redux, AWS, and node.js. Get your skills up to date with our awesome mentors!`,
    domain: 'IT',
    location: 'Helsinki',
    tags: ['programming', 'software', 'it', 'java', 'cobol', 'php', 'javascript'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
    question: 'Please write a short introduction of your technical background'
  },
  {
    id: 2,
    author: 'University of Tampere',
    title: 'Re-launch your English-teaching career in Tampere',
    description: `We are searching for mentorees in Tampere-area Finland to get up to speed in teaching languages.`,
    domain: 'Teaching',
    location: 'Tampere',
    tags: ['teaching', 'languages', 'english', 'french'],
    image: 'https://c1.staticflickr.com/8/7150/6697055189_f947d7a7a7_z.jpg',
    question: 'What motivates you in teaching?'
  },
  {
    id: 3,
    author: 'Cace\'s rakennus',
    title: 'Onboarding to finnish construction work',
    description: `If you're an experienced construction worker or lay roads like a pro, refresh your skills and learn the Finnish ways of doing construction work by attending our mentoring program!`,
    domain: 'Construction',
    location: 'Turku',
    tags: ['construction', 'roads', 'physical'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/US_Navy_080629-N-6477M-095_Builder_3rd_Class_Merlyna_Crank_and_Builder_Constructionman_Irene_L._Reeves%2C_both_assigned_to_Naval_Mobile_Construction_Battalion_%28NMCB%29_3_Det._4%2C_place_trimming_on_birthing_spaces_being_built_for_Afg.jpg/1280px-thumbnail.jpg'
  },
  {
    id: 4,
    author: 'Ravintole Putki',
    title: 'Restaurant professionals ready to start working in Finland',
    description: `We at Ravintole Putki are offering a way for you to get back to your own field of work after immigration.`,
    domain: 'Restaurant',
    location: 'Helsinki',
    tags: ['manager', 'waitress', 'restaurant'],
    image: 'https://c2.staticflickr.com/6/5041/5337695316_0a50575c0a_b.jpg',
    question: 'What do you expect from our mentoring program?'
  },
  {
    id: 5,
    author: 'TakaOvi kiinteistöt',
    title: 'Re-educating for real estate business',
    description: `We at TakaOvi kiinteistöt are offering a way for you to get back to your own field of work after immigration.`,
    domain: 'Real estate',
    location: 'Mäntsälä',
    tags: ['real estate', 'business'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Godrej_Mamurdi_North_Pune.jpg',
    question: 'Describe us your sales philosophy'
  }]

const applications = []

const toMentoringProgramId = R.compose(parseInt, R.path(['params', 'mentoringProgramId']))

app.get('/', (req, res) => {
  res.json({
    data: mentoringPrograms
  })
})

app.post('/apply/:mentoringProgramId', (req, res) => {
  const mentoringProgramId = toMentoringProgramId(req)
  applications.push({ mentoringProgramId, applicant: req.body })
  res.json({
    status: '👌'
  })
})

const toApplication = ({ name }) => `<p>${name}</p>`

const toApplicationListPage = ({ applicants, mentoringProgram }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${mentoringProgram.author} Mentoring program</title>
      </head>
      <body>
        <ul>
          ${R.compose(R.join(''), R.map(toApplication))(applicants)}
        </ul>
      </body>
    </html>
  `
}
app.get('/applications/:mentoringProgramId', (req, res) => {
  const mentoringProgramId = toMentoringProgramId(req)
  const toApplicants = R.compose(R.pluck('applicant'), R.filter(R.propEq('mentoringProgramId', mentoringProgramId)))
  R.compose(
    R.bind(res.send, res),
    toApplicationListPage,
    R.merge({ applicants: toApplicants(applications) }),
    R.objOf('mentoringProgram'),
    R.nth(0),
  )(mentoringPrograms)
})

app.listen(port, () => console.log(`Started on port ${port}`))

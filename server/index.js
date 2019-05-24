const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const port = 4201

const server = {
  scoreboard: []
}

app.use(cors())
app.use(bodyParser.json());

app.get('/api/scoreboard', (req, res) => res.json(server.scoreboard))
app.post('/api/results', (req, res) => {
  const game = {
    width: req.body.width,
    height: req.body.height,
    mineCount: req.body.mineCount,
    startTime: req.body.startTime,
  }

  server.scoreboard = [...server.scoreboard, game]
})

app.listen(port, () => console.log(`Mineserver listening on port ${port}!`))

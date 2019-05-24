const express = require('express')
const app = express()
const port = 4201

app.get('/api/', (req, res) => res.send('Welcome to the minesweeper RFP!'))

app.listen(port, () => console.log(`Mineserver listening on port ${port}!`))

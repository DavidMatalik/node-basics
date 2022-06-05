const express = require('express')
const app = express()
const fs = require('fs')

const port = process.env.PORT || 8080
const BASE_PATH = '/home/david/theOdinProject/simple-node-website'

const sendResponse = (path, res) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }

    res.send(data)
  })
}

app.get('/', (req, res) => {
  sendResponse(`${BASE_PATH}/index.html`, res)
})

app.get('/about', (req, res) => {
  sendResponse(`${BASE_PATH}/about.html`, res)
})

app.get('/contact-me', (req, res) => {
  sendResponse(`${BASE_PATH}/contact-me.html`, res)
})

app.get('*', (req, res) => {
  sendResponse(`${BASE_PATH}/404.html`, res)
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

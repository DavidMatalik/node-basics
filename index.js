const http = require('http')
const fs = require('fs')

const port = process.env.PORT || 8080
const BASE_PATH = '/home/david/theOdinProject/simple-node-website'
const AVAILABLE_URLS = ['/', '/about', '/contact-me']

const getPathToFile = (url) => {
  let wrongUrl = true
  for (let i = 0; i < AVAILABLE_URLS.length; i++) {
    if (AVAILABLE_URLS[i] === url) {
      wrongUrl = false
      break
    }
  }

  if (wrongUrl) {
    return `${BASE_PATH}/404.html`
  }
  if (url === '/') {
    return `${BASE_PATH}/index.html`
  }
  return `${BASE_PATH}${url}.html`
}

const server = http.createServer((req, res) => {
  const pathToFile = getPathToFile(req.url)

  fs.readFile(pathToFile, 'utf8', (err, data) => {
    if (err) {
      return console.log(err)
    }

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
  })
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

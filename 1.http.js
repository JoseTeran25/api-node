const hhtp = require('node:http')
const desirePort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a mi página web!')
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.end('404')
  }
}

const server = hhtp.createServer(processRequest)

server.listen(desirePort, () => {
  console.log(`server listening on ort http://localhost:${desirePort}`)
})

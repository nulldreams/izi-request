# Para simplificar

Usando o async/await nativo do node, é possível simplificarmos as requisições que são feitas através do [request](https://github.com/request/request).

O código abaixo mostra como fica as funções que farão as requisições, aparentemente nada de mais, não é?
```javascript
//request.js

const request = require('request')

async function get (url) {
  return new Promise((resolve, reject) => {
    request({ url, timeout: 120000 }, (error, response, body) => {
      if (error) return reject(error)

      return resolve({ body, response })
    })
  })
}

async function post (url, data) {
  return new Promise((resolve, reject) => {
    request({ url, method: 'POST', formData: data }, (error, response, body) => {
      if (error) return reject(error)

      return resolve({ body, response })
    })
  })
}

module.exports = {
  get,
  post
}
```

Veja como fica na hora de realizarmos uma requisição.
```javascript
const request = require('./request')
const cheerio = require('cheerio')

async function success () {
  let res = await request.get(`https://www.google.com.br/search?q=node+js`)
  const $ = cheerio.load(res.body)
  
  console.log(`Status: ${res.response.statusCode}`)
  console.log(`Message: ${res.response.statusMessage}`)
  console.log(`Request: ${$('.g').length} results found!`)
}
success()
```
resultado
```
Status: 200
Message: OK
Request: 10 results found!
```

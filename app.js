const request = require('./request')
const cheerio = require('cheerio')

async function success () {
  let res = await request.get(`https://www.google.com.br/search?q=node+js`)
  const $ = cheerio.load(res.body)

  console.log('==============================')
  console.log(`Status: ${res.response.statusCode}`)
  console.log(`Message: ${res.response.statusMessage}`)
  console.log(`Request: ${$('.g').length} results found!`)
}

async function error () {
  let res = await request.get(`https://www.google.com.br/asdasdasd?q=node+js`)
  const $ = cheerio.load(res.body)

  console.log('==============================')
  console.log(`Status: ${res.response.statusCode}`)
  console.log(`Message: ${res.response.statusMessage}`)
  console.log(`Request: ${$('.g').length} results found!`)
}

success()
error()

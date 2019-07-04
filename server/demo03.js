const koa = require('koa')
const app = new koa()
let accept
const main = ctx => {
  if (ctx.request.accepts('xml')) {
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hello World</data>'
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json'
    ctx.response.body = { data: 'Hello World' }
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hello World</p>'
  } else {
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
  }
  accept = ctx.request
  console.log(`accept: ${accept}`)
}
app.use(main)
app.listen(3000, () => {
  console.log(`server running ····`)
})
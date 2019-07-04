const koa = require('koa')
const app = new koa()
const main = ctx => {
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href = "/">Index Page </a>'
  } else {
    ctx.response.body = 'Hello World'
  }
}
app.use(main)
app.listen(3000, () => {
  console.log('running ····')
})
const koa = require('koa')
const route = require('koa-route')
const app = new koa()
const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href= "/">Index Page</a>'
}
const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/about">about</a>'
}
app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3000, () => {
  console.log('server running ···')
})
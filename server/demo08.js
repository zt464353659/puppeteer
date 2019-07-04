const koa = require('koa')
const route = require('koa-route')
const app = new koa()
const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<p>Hello World</p>'
}
const redirect = ctx => {
  ctx.response.redirect('/')
  ctx.response.body = '<a href="Index Page></a>"'
}
app.use(route.get('/redirect', redirect))
app.use(route.get('/', main))
app.listen(3000, () => {
  console.log('server running ···')
})
const koa = require('koa')
const compose = require('koa-compose')
const app = new koa()
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.url} ${ctx.request.method} ${ctx.request.url}`)
  next()
}
const main = (ctx, next) => {
  ctx.response.body = 'Hello World'
}
const middlewares = compose([logger, main])
app.use(middlewares)
app.listen(3000, () => {
  console.log('server running ···')
})
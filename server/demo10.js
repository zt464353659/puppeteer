const koa = require('koa')
const route = require('koa-route')
const app = new koa()
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method}} ${ctx.request.url}`)
  next()
}
const main = (ctx, next) => {
  console.log('main')
  ctx.response.body = 'Hello World'
  next()
  console.log('publish')
}
app.use(logger)
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
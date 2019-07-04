const koa = require('koa')
const app = new koa()
const main = async function (ctx, next) {
  ctx.throw(500)
  next()
}
const errTest = async function (ctx, next) {
  ctx.response.body = 'hello world'
  next()
}
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
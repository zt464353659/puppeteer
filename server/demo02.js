const koa = require('koa')
const app = new koa()
const main = ctx => {
  ctx.response.body = 'hello world'
}
app.use(main)
app.listen(3000, () => {
  console.log('server runnning   ···')
})
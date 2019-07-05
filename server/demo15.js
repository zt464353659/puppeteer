const koa = require('koa')
const app = new koa()
const main = async function (ctx, next) {
  ctx.response.status = 404
  ctx.response.body = 'Page Not Found'
}
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
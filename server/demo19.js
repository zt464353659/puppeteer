const koa = require('koa')
const app = new koa()
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
  }
}
const main = ctx => {
  const n = Number(ctx.cookies.get('view') || 0) + 1
  ctx.cookies.set('view', n)
  ctx.response.body = n + 'views'
}
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
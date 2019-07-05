// 处理错误的中间件,让最外层的中间件，负责所有中间件的错误处理。
const koa = require('koa')
const app = new koa()
const handler = async function (ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message
    }
  }
}
const main = ctx => {
  ctx.throw(500)
}
app.use(handler)
app.use(main)
app.listen(3000, () => {
  console.log('server running')
})
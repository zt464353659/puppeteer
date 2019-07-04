const koa = require('koa')
const koaBody = require('koa-body')
const app = new koa()
const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err.message)
  }
}
const main = async function (ctx) {
  const body = ctx.request.body
  if (!body.name) ctx.throw(400, 'name required')
  // ctx.response.type = 'json'
  ctx.body = { name: body.name }
}
app.use(koaBody())
app.use(handler)
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
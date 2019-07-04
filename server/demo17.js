// 事件监听
const koa = require('koa')
const app = new koa()
const main = ctx => {
  ctx.throw(500)
}
app.on('error', (err, ctx) => {
  console.error('server error', err)
  console.log(`访问路径： ${ctx.request.url} 时出现了 ${err}`)
})
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
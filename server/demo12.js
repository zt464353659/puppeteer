const koa = require('koa')
const fs = require('fs.promised')
const app = new koa()
const main = async function (ctx, next) {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./template.html', 'utf8')
}
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})
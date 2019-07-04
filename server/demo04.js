const fs = require('fs')
const koa = require('koa')
const app = new koa()
const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./template.html')
}
app.use(main)
app.listen(3000, () => {
  console.log('running ···')
})
const koa = require('koa')
const path = require('path')
const serve = require('koa-static')
const app = new koa()
const main = serve(path.join(__dirname))
app.use(main)
app.listen(3000, () => {
  console.log('server running ···')
})

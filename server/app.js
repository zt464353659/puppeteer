const koa = require('koa')
const koaBody = require('koa-body')
const cors = require('koa-cors')
const compose = require('koa-compose')
const route = require('koa-route')
const fs = require('fs.promised')
const app = new koa()
const main = async (ctx, next) => {
  ctx.response.type = 'html'
  ctx.response.body = await fs.readFile('./template.html', 'utf-8')
}
app.use(cors())
app.use(route.get('/', main))
app.use(koaBody())
// app.use(cors())
app.listen(3000, () => {
  console.log('server running ···')
})

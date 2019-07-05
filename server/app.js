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
  next()
}
const login = async (ctx, next) => {
  const body = ctx.request.body
  // console.log(body.name)
  // console.log(body.password)
  if (body.name && body.name === 'nice') {
    if (body.password && body.password === 'nice') {
      ctx.response.type = 'json'
      ctx.response.body = { code: 200, msg: "登录成功！" }
    }
  } else {
    ctx.response.type = 'json'
    ctx.response.body = { code: 20001, msg: '用户名或密码不能为空' }
  }
  next()
}
const index = async (ctx, next) => {
  ctx.response.type = 'json'
  ctx.response.body = {
    list: [
      { id: 1, name: 'tom', sex: 0, age: 12 },
      { id: 2, name: 'alen', sex: 1, age: 13 },
      { id: 3, name: 'martin', sex: 1, age: 12 },
      { id: 4, name: 'alice', sex: 0, age: 11 }
    ],
    msg: '获取列表成功'
  }
}
app.use(cors())
app.use(koaBody())
app.use(route.get('/', main))
app.use(route.post('/login', login))
app.use(route.get('/index', index))
// app.use(cors())
app.listen(3000, () => {
  console.log('server running ···')
})

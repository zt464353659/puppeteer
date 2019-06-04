// demo参考自阮一峰 koa 框架教程 http://www.ruanyifeng.com/blog/2017/08/koa.html
// 第一步 引入koa模块
const koa = require('koa')
const route = require('koa-route')
// 第二步 实例化一个koa类型
const app = new koa()
// 第三步 监听服务
app.listen(8888,() => { console.log('server running') })
// 创建main函数 设置ctx.response.body 
// const main = ctx => {
//     // koa返回的显示在页面上的内容
//     ctx.response.body = 'hello koa'
// }
// 使用app.use加载main函数
// app.use(main)
// koa默认的返回类型是text/plain 返回其它类型的数据需要用ctx.request.accepts判断客户端希望接受什么数据（根据HTTP请求的Accept字段） 然后使用ctx.response.type指定返回类型
const mainType = ctx => {
    if (ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World (XML)</data>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.body = { data: 'Hello World (json)'}
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World (html)</p>'
    } else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World (text)'
    }
}
const baidu = ctx => {
    ctx.response.type = 'html'
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    ctx.response.body = '<a href = "http://www.baidu.com">baidu</a>'
}
app.use(route.get('/',mainType))
app.use(route.get('/baidu',baidu))
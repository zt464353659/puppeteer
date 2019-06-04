const koa = require('koa')
const app = new koa()
const one = (ctx,next) => {
    console.log('>> one beforenext')
    next()
    console.log('<< one afternext')
}
const two = (ctx,next) => {
    console.log('>> two beforenext')
    next()
    console.log('<< two afternext')
}
const three = (ctx,next) => {
    console.log('>> three beforenext')
    next()
    console.log('<< three afternext')
}
/*
执行结果
>> one beforenext
>> two beforenext
>> three beforenext
<< three afternext
<< two afternext
<< one afternext
*/ 
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)
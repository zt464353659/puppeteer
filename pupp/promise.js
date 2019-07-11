function first () {
  return new Promise((open, err) => {
    const num = Math.random()
    if (num > 0.4) {
      console.log('第一个promise执行成功')
      open()
    } else {
      err('第一个promise执行失败')
    }
  })
}
function second () {
  return new Promise((open, err) => {
    const num = Math.random()
    if (num > 0.4) {
      console.log('第二个promise执行成功')
      open()
    } else {
      err('第二个promise执行失败')
    }
  })
}
function third () {
  return new Promise((open, err) => {
    const num = Math.random()
    if (num > 0.4) {
      console.log('第三个promise执行成功')
      open()
    } else {
      err('第三个promise执行失败')
    }
  })
}
first().then(second).then(third).catch(err => { console.log(err) })
// 验证： 多个promise顺序执行时，只要出现错误，程序立即停止执行
// 16、求s=a+aa+aaa+aaaa+aa。。。a的值，其中a是一个数字。例如2+22+222+2222（此时共有5个数相加），几个数相加由键盘控制
// js实现为形参控制
function addRules (a, b) {
  if (typeof (a) !== 'string') {
    a = a.toString()
  }
  let num = 0
  for (i = 0; i < b; i++) {
    num += parseInt(a)
    a += a.slice(-1)
  }
  console.log(num)
}
// addRules(2, 5) 
// => 24690
// 17、一个数如果恰好等于它的因子之和，这个数就成为“完数”。例如 6=1+2+3. 编程找出1000以内的所有完数
function wanshu () {
  const arr = []
  for (var i = 2; i < 1000; i++) {
    var sum = 0
    for (j = 1; j < i; j++) {
      if (i % j === 0) {
        sum += j
      }
    }
    if (sum === i) {
      arr.push(i)
    }
  }
  console.log(`1000以内的所有完数： ${arr.toString()}`)
}
// wanshu() 
// =>1000以内的所有完数： 6,28,496
// 18、一球从100米高度自由落下，每次落地后反跳回原高度的一般；再落下，求它在第10次落地时，共经过多少米，第10次反弹多高
// 第一次反弹高度--50m，递归计算第n次反弹的高度
// 第一次落地的距离 下落100 第二次落地 反弹50+下落50 除第一次落地外，之后的每一次落地经过的距离都是反弹的高度*2
function ball (n) {
  var meter = 100, height = 100
  for (var i = 1; i <= n; i++) {
    // i==当前反弹的第n次
    if (i < n) {
      meter += height
    }
    height /= 2
  }
  console.log(`第${n}次落地经过的距离是${meter}m,第${n}次反弹的高度是${height}`)
}
// ball(10)
// => 第10次落地经过的距离是299.609375m,第10次反弹的高度是0.09765625

// 19、猴子吃桃问题：猴子第一天摘下若干桃子，当即吃了一半还不过瘾又多吃了一个，第二天又将剩下的桃子吃掉一半，又多吃了一个。以后每天早上都吃了前一天剩下的一半零一个。到第10天早上再想吃时，只剩下一个桃子了。求第一天共摘了多少
// 第10天 1个 前一天的桃子数量 = 后一天*2+1
function peach (n) {
  if (n === 10) {
    return 1
  }
  return peach(n + 1) * 2 + 1
}
// console.log(peach(1))
// => 1023
// 猴子一次能摘1023个桃？！！
// 20、两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。已抽签决定比赛名单。有人像队员打听比赛的名单。a说他不和x比，c说他不和x，z比，请编程找出三队赛手的名单
function list () {
  var yi = ['x', 'y', 'z']
  // c不和x,z比
  yi.map(val => {
    if (val !== 'x' && val !== 'z') {
      console.log(`c和${val}比`)
    } else if (val !== 'x') {
      console.log(`a和${val}比`)
    } else {
      console.log(`b和${val}比`)
    }
  })
}
// list()
/**
 * b和x比
 * c和y比
 * a和z比
 */
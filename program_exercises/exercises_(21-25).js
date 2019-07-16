// 21、有一分数序列：2/1,3/2,5/3,8/5,13/8,21/13...求这个数列的前20项之和
function sumList (n) {
  let min = 1, max = 2, content, sum = 0
  for (var i = 0; i < n; i++) {
    sum += max / min
    content = max
    max = content + min
    min = content
  }
  console.log(sum)
}
// sumList(20)
// => 32.66026079864164

// 22、求 1+2!+3!+...+20!的和
function jiecheng (n) {
  let sum = 0
  for (var i = 1; i <= n; i++) {
    let single = 1
    for (j = 1; j <= i; j++) {
      single *= j
    }
    sum += single
  }
  console.log(sum)
}
// jiecheng(20)
// => 2561327494111820300

// 23、利用递归方法求 5！
function dg (n) {
  if (n == 1) {
    return 1
  }
  return dg(n - 1) * n
}
// console.log(dg(5))
// =>120

// 24、利用递归函数调用方式，将所输入的5个字符以相反顺序打印出来
// JS 。。真的不知道怎么写递归,写一个es6剩余参数吧
function nixu (...arg) {
  console.log(arg.reverse().toString())
}
// nixu(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// => 10,9,8,7,6,5,4,3,2,1

// 25、有5个人坐在一起，问第五个人多少岁？他说比第4个人大2岁。问第4个人岁数，他说比第3个人大2岁。问第三个人，又说比第2个人大两岁，问第2个人，说比第一个人大两岁。最后问第一个人，他说是10岁。请问第五个人多大
// ..又是递归
// function age (n) {
//   if (n == 1) {
//     return 10
//   }
//   return agedg(n - 1) + 2
// }
// console.log(age(5))
//  => 18
// 用循环代替
function age (n) {
  var personAge = 10
  for (var i = 1; i <= n; i++) {
    if (i > 1) {
      personAge += 2
    }
  }
  console.log(personAge)
}
// age(5)
// => 18
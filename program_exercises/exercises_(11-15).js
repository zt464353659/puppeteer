// 11、判断101-200之间有多少素数，并输出所有素数
// 素数=质数 ：定义为在大于1的自然数中，除了1和它本身以外不再有其他因数
function sushu (min, max) {
  let arr = []
  for (var i = min; i < max + 1; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        break
      }
      if (j == i - 1 && i % j != 0) {
        arr.push(i)
      }
    }
  }
  console.log(`${min}~${max}之间一共有${arr.length}个素数，它们是：${arr.toString()}`)
}
// sushu(101, 200)

// 12、打印出所有的“水仙花数”，所谓“水仙花数”是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个“水仙花数”，因为153=1的三次方+5的三次方+3的三次方。
function narcissisticNumber () {
  let arr = []
  for (var i = 1; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; k++) {
        if (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3) == i * 100 + j * 10 + k) {
          let num = 100 * i + j * 10 + k
          arr.push(num)
        }
      }
    }
  }
  console.log(`水仙花数一共有${arr.length}个，它们是：${arr.toString()}`)
}
// narcissisticNumber()

//  13、利用条件运算符的嵌套来完成此题：学习成绩>=90的同学用A表示，60-89分之间的用B表示，60分一下的用C表示
function score (score) {
  if (score >= 90) {
    console.log('A')
  } else if (score >= 60) {
    console.log('B')
  } else {
    console.log('C')
  }
}
// score(90)
// score(80)
// score(59)

// 14/输入两个正整数m和n,求其最大公约数和最小公倍数
function outputNumber (m, n) {
  let max, min
  if (m > n) {
    max = m
    min = n
  } else {
    max = n
    min = m
  }
  for (var i = min; i > 0; i--) {
    if (min % i == 0 && max % i == 0) {
      console.log(`${m},${n}的最大公约数是${i}`)
      break;
    }
  }
  for (var i = max; true; i++) {
    if (i % max == 0 && i % min == 0) {
      console.log(`${m},${n}的最小公倍数是${i}`)
      break;
    }
  }
}
// outputNumber(2, 5)

// 15、输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数
function statistics (str) {
  const letterReg = /[a-zA-z\u4e00-\u9fa5]/
  const numberReg = /\d/
  const spaceReg = /[' ']/
  const arr = str.split('')
  const obj = {
    letter: 0,
    number: 0,
    space: 0,
    other: 0
  }
  arr.forEach(item => {
    if (letterReg.test(item)) {
      obj.letter++
    } else if (numberReg.test(item)) {
      obj.number++
    } else if (spaceReg.test(item)) {
      obj.space++
    } else {
      obj.other++
    }
  })
  for (var key in obj) {
    console.log(`${key}:${obj[key]}`)
  }
}
statistics('我a ,,.aA 112')
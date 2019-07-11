// 5、输入三个整数 x,y,z 请把这三个数由小到大输出
function sort (a, b, c) {
  var max = 0, min = 0, middle = 0
  if (a > b) {
    if (a > c) {
      max = a
      if (b > c) {
        middle = b
        min = c
      } else {
        middle = c
        min = b
      }
    } else {
      max = c
      middle = a
      min = b
    }
  } else {
    if (b > c) {
      max = b
      if (a > c) {
        middle = a
        min = c
      } else {
        middle = c
        min = a
      }
    } else {
      max = c
      middle = b
      min = a
    }
  }
  console.log(`${max}>=${middle}>=${min}`)
}
// sort(13,223,113)
/**
 * 6、用 * 号输出字母 C 的图案
 */
function printC () {
  for (let j = 1; j < 6; j++) {
    let str = '   '
    if (j == 1 || j == 5) {
      for (let i = 1; i < 6; i++) {
        if (i == 2 || i == 5) {
          str += '*'
        } else {
          str += ' '
        }
      }
    } else if (j == 2 || j == 4) {
      for (let i = 1; i < 7; i++) {
        if (i == 1 || i == 6) {
          str += '*'
        } else {
          str += ' '
        }
      }
    } else {
      for (let i = 1; i < 6; i++) {
        if (i == 1) {
          str += '*'
        } else {
          str += ' '
        }
      }
    }
    console.log(str)
  }
}
// printC()

// 7、将一个正整数分解质因数。例如：输入90，打印出90=2*3*3*5
function primeFactorization (a) {
  const num = a
  if (a == 1) {
    console.log('1没有质因数')
    return
  }
  let arr = []
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) {
      a /= i
      arr.push(i)
      i = 2
    }
  }
  if (arr.length > 1) {
    console.log(`${num} = ${arr.join('*')}`)
  } else {
    console.log('输入了一个质数，无法分解质因数')
  }
}
//  primeFactorization(13)
// 8、输出9*9口诀
function multiplication () {
  for (let i = 1; i < 10; i++) {
    let str = ''
    for (let j = i; j < 10; j++) {
      str += `${i}*${j} = ${i * j}  `
    }
    console.log(str)
  }
}
// multiplication()
// 10、有一对兔子，从出生后第3个月过后每个月都生一对兔子，小兔子长到第三个月之后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数是多少？
/* 
  月份      1  2  3  4  5  6  7  8  9
  兔子对数   1  1  1  2  3  4  6  9  13
*/
// 数列分析：与斐波那契数列相似 兔子对数 = 上月兔子对数 + 此前三个月兔子对数
function rabbit (month) {
  if (month == 1 || month == 2 || month == 3) {
    return 2
  } else {
    return (rabbit(month - 1) + rabbit(month - 3))
  }
}
const rabbitNum = (month) => {
  for (var i = 1; i < month + 1; i++) {
    console.log(`第${i}月时共有${rabbit(i)}只兔子`)
  }
}
rabbitNum(10)

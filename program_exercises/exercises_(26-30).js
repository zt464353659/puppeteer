// 26、给一个不多于5位的正整数，要求：1、求它是几位数 2、逆序打印出各位数字
function printNum (num) {
  num = num.toString()
  console.log(`它是一个${num.length}位数，逆序为： ${num.split('').reverse().join('')}`)
}
// printNum(12233)

// 27、一个5位数，判断它是不是回文数。即12321是回文数，个位与万位相同，十位与千位相同。
function huiwen (num) {
  num = num.toString()
  if (num.length !== 5) {
    console.log('输入应该是一个5位数')
    return
  }
  if (num.slice(0, 1) === num.slice(-1) && num.slice(1, 2) === num.slice(-2, -1)) {
    console.log(`${num}是一个回文数`)
  } else {
    console.log(`${num}不是一个回文数`)
  }
}
// huiwen(12322)
//  => 12322不是一个回文数

// 28、请输入星期几的第一个字母来判断一下是星期几，如果第一个字母一样，则继续判断第二个字母
/** 
 * 一、monday  二、tuesday   三、wednesday 四、thursday  
 * 五、friday  六、saturday  日、sunday
*/
function day (str) {
  str = str.toString().toLowerCase()
  let first = str.slice(0, 1)
  let second = str.slice(1, 2)
  if (first === 'm') {
    console.log('星期一')
  } else if (first === 'w') {
    console.log('星期三')
  } else if (first === 'f') {
    console.log('星期五')
  } else if (first === 't') {
    if (second === 'u') {
      console.log('星期二')
    } else {
      console.log('星期四')
    }
  } else {
    if (second === 'a') {
      console.log('星期六')
    } else {
      console.log('星期日')
    }
  }
}
// day('Sunday')

// 29、对10个数进行排序
function sort (...args) {
  if (args.length > 10) {
    console.log('输入的数量多于10个')
    return
  }
  console.log('排序：' + args.sort((a, b) => a - b).join('<'))
}
// sort(1, 8, 3, 4, 5, 6, 7, 2, 9, 10)

// 30、求一个3*3矩阵对角线元素之和
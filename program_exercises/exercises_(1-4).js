// 有1/2/3/4 个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
function threeWords(num) {
    for(var i=1;i<=num;i++) {
        // i 百位
        for(j=1;j<=num;j++) {
            // j 十位 百位和十位不同
            if(j!==i) {
                for (k=1;k<=num;k++) {
                    if(k!==i && k!==j) {
                        console.log(i*100+j*10+k)
                    }
                }
            }
        }
    }
}
// threeWords(4)
/**
 * //企业发放的奖金根据利润提成。利润（I）低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时，高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%；高于100万元时，超过100万元的部分按1%提成，从键盘输入当月利润I，求应发放奖金总数？
 */
// 奖金 reward
function reward (money) {
    if (money<=10) {
        return money*0.1
    } else if (money>10 && money<=20) {
        return (money-10)*0.075+1
    } else if (money>=20 && money<=40) {
        return (money-20)*0.05+1.75
    } else if (money>=40 &&money<=60) {
        return (money-40)*0.03+2.75
    } else if (money>=60 && money<=100) {
        return (money-60)*0.015+3.35
    } else if (money>100) {
        return (money-100)*0.01+3.95
    }
}
// console.log(reward(100).toFixed(4))
/**
 * 一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，该数是多少？
 */
function guess() {
    var find = false
    for(var i=0;true;i++) {
        for (j=0;j<10000;j++) {
            if(i+100 === j*j) {
                for (k=0;k<10000;k++) {
                    if (i+168 === k*k) {
                        console.log(i)
                        find = true
                        break
                    }
                }
            }
        }
        if (find) {
            break
        } 
    }
}
// guess()  ==>156
/**
 * 输入某年某月某日，判断这一天是这一年的第几天
 * 闰年 2月29天，平年2月28天
 * 闰年 能被4整除但不能被100整除的年份为普通闰年 能被400整除的为世纪闰年 
 */
function getDays(date) {
    var inputDate = new Date(date)
    if (!Number(inputDate.getTime())) {
        console.log('无效的日期格式')
        return
    }
    var customYear = inputDate.getFullYear()
    var customMonth = inputDate.getMonth()
    var customDate = inputDate.getDate()
    // 判断是平年还是闰年
    // 根据月份计算天数
    function calcDays(februaryDays,customMonth,customDate,customYear) {
        var days = 0
        for (i=0;i<=customMonth;i++) {
            switch (i) {
                case 1:days += 31
                break
                case 2:days += februaryDays
                break
                case 3:days += 31
                break
                case 4:days += 30
                break
                case 5:days += 31
                break
                case 6:days += 30
                break
                case 7:days += 31
                break
                case 8:days += 31
                break
                case 9:days += 30
                break
                case 10:days += 31
                break
                case 11:days += 30
                break
                default: days += 0
                    break;
            }
        }
        days += customDate
        console.log(`这一天是${customYear}年的第${days}天`)
    }
    if (customYear % 4 ===0 && customYear % 100!== 0 || customYear %400 === 0) {
        // 闰年
        calcDays(29,customMonth,customDate,customYear)
    } else {
        // 平年
        calcDays(28,customMonth,customDate,customYear)
    }   
}
getDays('2016-03-01 15:00')
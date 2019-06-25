// 5、输入三个整数 x,y,z 请把这三个数由小到大输出
function sort(a,b,c) {
    var max = 0, min = 0, middle = 0
    if (a>b) {
        if (a>c) {
            max = a
            if (b>c) {
                middle = b 
                min = c
            } else {
                middle = c
                min = b
            }
        } else {
            max = c
            middle = a
            min =b
        }
    } else {
        if (b>c) {
            max = b
            if (a>c) {
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
function printC() {
    for(let j=1;j<6;j++) {
        let str = '   '
        if (j==1 || j==5) {
            for (let i=1;i<6;i++) {
                if (i==2 || i==5) {
                    str += '*'
                } else {
                    str+=' '
                }
            }
        } else if (j==2 || j==4) {
            for(let i=1;i<7;i++) {
                if (i==1 || i==6) {
                    str+='*'
                } else {
                    str+=' '
                }
            }
        } else {
            for(let i=1;i<6;i++) {
                if(i==1) {
                    str+='*'
                } else {
                    str+= ' '
                }
            }
        }
        console.log(str)
    } 
}
printC()
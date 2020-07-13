const calcNineStar = (year) => {
  const nineStars = ['一白水星', '二黒土星', '三碧木星', '四緑木星', '五黄土星', '六白金星', '七赤金星', '八白土星', '九紫火星']
  const stringYear = year.toString()
  let result = 0
  let num1 = 0
  let num2 = 0

  if (year >= 2 && year <= 11) {
    result = 12 - year
  } else {
    if (year === 1) {
      year = 64
    }
    num1 = parseInt(year.toString().substring(0, 1))
    num2 = parseInt(year.toString().substring(1, 2))
    const totalNum = num1 + num2
    if (totalNum >= 12) {
      const totalNum1 = parseInt(totalNum.toString().substring(0, 1))
      const totalNum2 = parseInt(totalNum.toString().substring(1, 2))
      result = 12 - (totalNum1 + totalNum2)
    } else {
      result = 12 - totalNum
    }
  }
  return nineStars[result-1]
}

calcNineStar(3) // 九紫火星

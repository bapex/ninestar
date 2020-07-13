const calcNineStar = (gengou: string, year: number): string => {
  const nineStars: string[] = ['一白水星', '二黒土星', '三碧木星', '四緑木星', '五黄土星', '六白金星', '七赤金星', '八白土星', '九紫火星', '一白水星']
  let result: number = 0
  let num1: number = 0
  let num2: number = 0

  if(gengou === "reiwa") {
    year = year + 3
  }

  if (year >= 2 && year <= 11) {
    result = 12 - year
  } else {
    if (year === 1) {
      year = 64
    }
    num1 = parseInt(year.toString().substring(0, 1))
    num2 = parseInt(year.toString().substring(1, 2))
    const totalNum: number = num1 + num2
    if (totalNum >= 12) {
      const totalNum1: number = parseInt(totalNum.toString().substring(0, 1))
      const totalNum2: number = parseInt(totalNum.toString().substring(1, 2))
      result = 12 - (totalNum1 + totalNum2)
    } else {
      result = 12 - totalNum
    }
  }
  return nineStars[result-1]
}

class GetResult {
  constructor() {
    const btn = document.querySelector('#btn')
    btn!.addEventListener("click", (e:Event) => this.clickResultBtn())
  }
  clickResultBtn(){
    const select = document.querySelector('select')
    const input = document.querySelector('input')
    const resultDiv = document.querySelector('#result')
    const gengou: string = select!.value
    const year: number = parseInt(input!.value)
    const result: string = calcNineStar(gengou, year)
  	resultDiv!.textContent = result
  }
}

new GetResult()

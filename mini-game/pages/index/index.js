// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    number: 0,
    next: 0,
    hasChar: false,
    prev: 0,
    first: 0,
    type:'',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '=', '.'],
    chars: ['+', '-', '*', '/']
  },
  onLoad() {
  },
  click(e) {
    const value = e.currentTarget.dataset.value
    if (this.data.chars.indexOf(value) != -1 || value == '=') {
      this.setData({
        hasChar: true,
      })
    }
    if (!this.data.hasChar) {
      this.setData({
        number: this.data.number + value + ''
      })
    } else {
      let nu = this.data.number + value;
      const second = parseFloat(nu.substr(0, nu.length - 1))
      const first = parseFloat(nu.substr(0, nu.length - 1))
      if (value == '=') {
        this.setData({
          prev : this.data.prev + nu
        })
        if (this.data.first) {
          nu = this.cacule(this.data.first, second, this.data.type)
        }
        this.setData({
          number: nu
        })
      } else {
        this.setData({
          next: this.data.next + value + '',
          prev: nu,
          hasChar: false,
          first,
          type: value,
          number: ''
        })
      }
    }
  },
  cacule(first, second, type) {
    switch (type) {
      case '+':
        return first + second;
      case '-':
        return first - second;
      case '*':
        return first * second;
      case '/':
        return first / second;
    }
  }
})

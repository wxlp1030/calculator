// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    number : 0,
    hasChar: false,
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '=', '.'],
    chars: ['+', '-', '*', '/']
  },
  onLoad() {
  },
  click(e) {
    const value = e.currentTarget.dataset.value
    console.log(value);
    if (this.data.chars.indexOf(value) != -1) {
      this.setData({
        hasChar: true
      })
      
    }
    this.setData({
      number : this.data.number + value + ''
    })
  }
})

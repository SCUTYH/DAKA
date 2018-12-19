//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    link: [{
        icon: '../../../images/my_25.jpg',
        name: '邀请好友',
        value: 'Value1'
      },
      {
        icon: '../../../images/my_25.jpg',
        name: '地址管理',
        value: 'Value2'
      },
      {
        icon: '../../../images/my_25.jpg',
        name: '联系客服',
        value: 'Value3'
      },
    ]
  },
  jumpto: function() {
    wx.navigateTo({
      url: '../new/new',
    })
  }
})
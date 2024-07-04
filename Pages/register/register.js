const app = getApp();
Page({
    data: {
    name: "",
    pwd1: "",
    kidsname: "",
    tel: "",
    openid: "",
    test: ""
  },
  clickReg: function() { //增加用户
    const db = wx.cloud.database()
    const test = db.collection('Userinfo')

    test.add({
      // data 字段表示需新增的 JSON 数据
      data: {

        name: "test",
        age: 30
      },
      success: function(res) {
        //  输出成功插入后的id以及其他信息
        console.log(res)
      }
    })
  },
  clicktest: function(e) {
    var that = this
    this.setData({
      name: e.detail.value.username,
      pwd: e.detail.value.pwd1,
      tel: e.detail.value.tel,
      kidsname: e.detail.value.kidsname
    })
    app.globalData.name = that.data.name
    console.log(this.data.name)
    const db = wx.cloud.database()
    db.collection('Userinfo').where({
        name: this.data.name,
      })
      .get({
        success: function(res) {
          // res.data 是包含以上定义的两条记录的数组
          that.setData({
            test: res.data.length
          })
          // console.log(res.data) 
          // console.log(res.data[0]) 
          // console.log(res.data[0].name) 
          if (that.data.test != 1) {
            db.collection('Userinfo').add({
              data: {
                name: that.data.name,
                kidsname: that.data.kidsname,
                pwd: that.data.pwd,
                tel: that.data.tel
              }
            })
            console.log("success")
           wx.showModal({
              title: '提示',
              content: '注册成功！',
              success: function(res) {
                if (res.confirm) {
                  wx.switchTab({
                    url: '../me/me'
                  })
                } else if (res.cancel) {
                  wx.switchTab({
                    url: '../me/me'
                  })
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '用户名已存在',
              success: function(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          }
        }
      })
  }
})
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students:{
      stu1name:" ",
      stu2name:" ",
      stu3name:" ",
      stu4name: " ",
      stu5name: " ",
    },
    // iconSize: [20, 30, 40, 50, 60, 70],
    // iconColor: [
    //   'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    // ],
    // iconType: [
    //   'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    // ]
  },
  map: function (e) {
   
    wx.navigateTo({
      // url: '../access_1/access_1?id=5',
      url: '../access_1/access_1?id=5',
      // events:{
      //   acceptDataFromOpenedPage:function(data)
      //   {
      //     console.log(data)
      //   },
      //   someEvent: function (data) {
      //     console.log(data)
      //   }
      // },
      // success: function (res) {
      //   // 通过eventChannel向被打开页面传送数据
      //   res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      // }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this.data
    // console.log(e.currentTarget.dataset.id)
    console.log(app.globalData.name1)
    const db = wx.cloud.database()
    db.collection("Stu-mark").where({
      name: app.globalData.name1
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data)
          
        }
      })
    db.collection("Project").where({
      name: app.globalData.name1
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data)
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
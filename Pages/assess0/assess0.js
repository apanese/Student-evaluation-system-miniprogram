const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stu1:{
    name:"",
    already_num:[],
    not_already_num: [],            //用数组记录已评价和未评价各标题的数量   already_num[0]是“已评价道德品质”的数量
    already:[
      { 
        title:"",
        name:"",
        time:"",
        introduction:"",
        gains:"",
        score:"",
        comment:["",""]
    },
    ],
      not_already: [
        {
          title: "",
          name: "",
          time: "",
          introduction: "",
          gains: "",
          score: "",
          comment: ["", ""]
        },
      ],


    },
    stu2: {
     name:""
    },
    stu3: {

    },
    stu4: {

    },
    stu5: {

    },
  },
  map: function (e) {
    // console.log(e.currentTarget.dataset.id)
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      // url: '../access_1/access_1'
      url: '../access_1/access_1?id=' + e.currentTarget.dataset.id,   //把点击按钮后绑定的名称传过去
    })
  },
  onStandardClick: function () {
    wx.navigateTo({
      url: "../assess0/standard/standard"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let stu1_name = ['stu1.name', 'stu2.name', 'stu3.name', 'stu4.name', 'stu5.name',]   //这里为对象的字段赋值
    var that=this
    console.log(app.globalData.name1)
    const db = wx.cloud.database()
    db.collection("Stu-mark").where({
      name: app.globalData.name1
    })
      .get({
        success: function (res) {
          // res.data 是包含以上定义的两条记录的数组
          console.log(res.data)
          console.log(res.data[0].mark1)
          that.setData({
            [stu1_name[0]]:res.data[0].name,
            [stu1_name[1]]: res.data[0].mark1,
            [stu1_name[2]]: res.data[0].mark2,
            [stu1_name[3]]: res.data[0].mark3,
            [stu1_name[4]]: res.data[0].mark4,       //biao1

          })
          console.log(that.data.stu1.name)
          const db=wx.cloud.database()                    
          db.collection("Project").where({    //biao2
            name: that.data.stu2.name
          })
            .get({
              success: function (res) {
                // res.data 是包含以上定义的两条记录的数组
                console.log(res.data)
                that.setData({
                  // [stu1_name[0]]: res.data[0].name,
                  // [stu1_name[1]]: res.data[0].mark1,
                  // [stu1_name[2]]: res.data[0].mark2,
                  // [stu1_name[3]]: res.data[0].mark3,
                  // [stu1_name[4]]: res.data[0].mark4,
                })
                console.log(that.data.stu1.name)
              }
            })                    //biao2_end
          console.log(that.data.stu1.name)
          console.log(that.data.stu2.name)
        }
      })               //biao1_end
   
    
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
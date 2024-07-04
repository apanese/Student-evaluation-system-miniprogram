Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:"",
    value1: '',
    value2: '',
    value3: '',
    value4: '输入框已禁用',
    value5: '',
    value6: '',
    value7: '',
    add: [{
      one_2: 0,
      zero_2: 5,
      comment: []
    }],
    alreadyevents: [
      {
        title: "",
        name: "",
        time: "",
        introduction: "",
        gains: "",
        score: "",
        no_score: "",
        comment: "",

      },
    ],
    not_alreadyevents: [
      {
        title: "",
        name: "",
        time: "",
        introduction: "",
        gains: "",
        score: "",
        comment: "",
        zero_2:5,
        one_2:0,
      },
    ],
    already_hide: true,
    not_already_hide: false


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("access_2 onload")
    var that = this
    var title = options.title
    var name = options.name
    var already_hide = options.already_hide
    const db = wx.cloud.database()
    console.log(title)
    console.log(already_hide)
    this.setData({
      already_hide: true,
      not_already_hide: false
    })
    // var pages = getCurrentPages();
    // var prevPage = pages[pages.length - 2];
    // var length = prevPage.data.alreadyevents.length
    // console.log(prevPage.data.alreadyevents[0].name)
    if (already_hide == "true") {       //这里把传入的already_hide值当做成string类型了                          //if1 开端
      this.setData({
        already_hide: true,
        not_already_hide: false,
      })
      console.log(already_hide)
      db.collection('Project').where({
        name: name,
        title: title
      }).get({
        success: function (res) {
          console.log(res.data)
          var length = res.data.length
          for (var i = 0; i < length; i++) {
            var alname = "alreadyevents[" + i + "].name"
            var altime = "alreadyevents[" + i + "].time"
            var altitle = "alreadyevents[" + i + "].title"
            var alintroduction = "alreadyevents[" + i + "].introduction"
            var algains = "alreadyevents[" + i + "].gains"
            var alscore = "alreadyevents[" + i + "].score"
            var alnoscore = "alreadyevents[" + i + "].no_score"
            var alcomment = "alreadyevents[" + i + "].comment"
            var addone_2 = "add[" + i + "].one_2"
            var addzero_2 = "add[" + i + "].zero_2"
            // var addcomment = "add[" + i + "].comment"        //评论，待做
            that.setData({
              [alname]: res.data[i].name,
              [altime]: res.data[i].time,
              [altitle]: res.data[i].title,
              [alintroduction]: res.data[i].introduction,
              [algains]: res.data[i].gains,
              [alscore]: res.data[i].score,
              [alnoscore]: 5 - res.data[i].score,
              [alcomment]: res.data[i].comment,
              [addone_2]: 0,
              [addzero_2]: 5,
            })
          }
        }
      })
                           //if结尾
    }                                          //if1 结尾
    else {
      this.setData({
        already_hide: false,
        not_already_hide: true
      })
      db.collection('Project-N').where({
        name: name,
        title: title
      }).get({
        success: function (res) {
          console.log(res.data)
          var length = res.data.length
          for (var i = 0; i < length; i++) {
            var alname = "not_alreadyevents[" + i + "].name"
            var altime = "not_alreadyevents[" + i + "].time"
            var altitle = "not_alreadyevents[" + i + "].title"
            var alintroduction = "not_alreadyevents[" + i + "].introduction"
            var algains = "not_alreadyevents[" + i + "].gains"
            var alscore = "not_alreadyevents[" + i + "].score"
            var alcomment = "not_alreadyevents[" + i + "].comment"
            var alone_2 = "not_alreadyevents[" + i + "].one_2"
            var alzero_2 = "not_alreadyevents[" + i + "].zero_2"
            that.setData({
              [alname]: res.data[i].name,
              [altime]: res.data[i].time,
              [altitle]: res.data[i].title,
              [alintroduction]: res.data[i].introduction,
              [algains]: res.data[i].gains,
              [alone_2]: 0,
              [alzero_2]: 5,
              [alcomment]: "",

              // [alscore]: res.data[i].score,
              // [alcomment]: res.data[i].comment
            })
          }
        }
      })
    }
    this.setData({
    })
},

  in_xin: function (e) {
    var i=e.currentTarget.dataset.stuindex

    var in_xin = e.currentTarget.dataset.in;
    var one_2=this.data.not_alreadyevents[i].one_2
    var zero_2 = this.data.not_alreadyevents[i].zero_2
    var alone_2 = "not_alreadyevents[" + i + "].one_2"
    var alzero_2 = "not_alreadyevents[" + i + "].zero_2"
    if (in_xin == 0) {
      console.log(Number(e.currentTarget.id));
      one_2 = this.data.not_alreadyevents[i].one_2 + Number(e.currentTarget.id)
      zero_2=5-one_2
      this.setData({
        [alone_2]: one_2,
        [alzero_2]: zero_2,
      })
      this.setData({
      })
    }
    else {
      one_2 =  Number(e.currentTarget.id)
      zero_2 = 5 - one_2
      console.log(e.currentTarget.id);
      this.setData({
        [alone_2]: one_2,
        [alzero_2]: zero_2,
      })

    }
    console
  },
  changeSearch: function (event) {
    console.log(event)
    let that = this;
    var comment = event.detail.detail.value
    var index=event.currentTarget.dataset.stuindex  
    var alcomment = "not_alreadyevents[" + index + "].comment"

    this.setData({
      [alcomment]:comment
     })

  },
  handleClick:function(e){
    var that=this
    console.log("test 确定")
    console.log(e)
    var is_comment=false
    var is_score=false
    var i=e.currentTarget.dataset.stuindex
    var str = that.data.not_alreadyevents[i].comment
   if(str=="")
   {
     wx.showModal({
       title: '提示',
       content: '评语不能为空！',
       success: function (res) {
         if (res.confirm) {
         } else if (res.cancel) {
         }
       }

     })
   }
   else{
     wx.showModal({
       title: '提示',                                      //询问是否确定？
       content: '确定提交？',
       success: function (res) {
         if (res.confirm) {
           const db=wx.cloud.database()
           db.collection("Project").add({                       //数据库增加操作开端
             data:{     
               name: that.data.not_alreadyevents[i].name,
               already:true,
               title: that.data.not_alreadyevents[i].title,
               comment: that.data.not_alreadyevents[i].comment,
               introduction: that.data.not_alreadyevents[i].introduction,
               score: that.data.not_alreadyevents[i].one_2,
               time: that.data.not_alreadyevents[i].time,
               gains: that.data.not_alreadyevents[i].gains,          
             }, 
             success: function (res) {
               console.log(res)
             }
           })                                                  //数据库增加操作结尾
           console.log(that.data.not_alreadyevents[i].comment)
           wx.cloud.callFunction({                             //调用云函数删减数据库记录
             // 要调用的云函数名称
             name: 'remove',
             // 传递给云函数的event参数
             data: {
             name: that.data.not_alreadyevents[i].name,
             title: that.data.not_alreadyevents[i].title,
             introduction: that.data.not_alreadyevents[i].introduction,
             gains: that.data.not_alreadyevents[i].gains,
             }
           }).then(res => {
             console.log(res)
             // output: res.result === 3
           }).catch(err => {
             console.log(res)
             // handle error
           })

           console.log(that.data.alreadyevents[0].name)

           wx.showModal({                                //确定后的提示框
            
            content: '提交成功！',
             success: function (res) {
               if (res.confirm) {
                 wx.reLaunch({
                   url: '../assess0/assess0?id='+that.data.not_alreadyevents[0].name
                 })
               } else if (res.cancel) {
                 wx.reLaunch({
                   url: '../assess0/assess0?id=' + that.data.not_alreadyevents[0].name
                 })
               }
             }                                       //确定后的提示框
           })
         } else if (res.cancel) {                     //取消确定，返回本页面
          //  wx.switchTab({
          //    url: '../me/me'
          //  })
         }
       }
     })
   }
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
    // console.log("onHide")
    // var pages = getCurrentPages();
    // var prevPage = pages[pages.length - 2];
    // prevPage.setData({
    //   alreadyevents:[{}],
    // })
    // this.setData({
    //   alreadyevents: {

    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // console.log("onUnloadacc2")
    // wx.cloud.callFunction({
    //   // 要调用的云函数名称
    //   name: 'remove',
    //   // 传递给云函数的event参数
    //   data: {
    //     x: 1,
    //     y: 2,
    //   }
    // }).then(res => {
    //   // output: res.result === 3
    // }).catch(err => {
    //   // handle error
    // })
  
    

   
   
    // prevPage.setData({
    //   alreadyevents: [{}],
    // })
    // this.setData({
    //   alreadyevents: [{

    //   }]
    // })
    // this.setData({
    //   alreadyevents:[{

    //   }]
    // })

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
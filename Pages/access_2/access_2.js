// Pages/access_2/access_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '输入框已禁用',
    value5: '',
    value6: '',
    value7: '',
    add:[{
      one_2:0,
      zero_2:5,
      comment:[]
    }],
    alreadyevents: [
      {
        title: "",
        name: "",
        time: "",
        introduction: "",
        gains: "",
        score: "",
        no_score:"",
        comment: ["", ""],
       
      },
    ],
    not_alreadyevents: [
      {
        title:"",
        name: "",
        time: "",
        introduction: "",
        gains: "",
        score: "",
        comment: ["", ""],
        zero_2: 0,
        one_2: 5,
      },
    ],
    already_hide:true ,
    not_already_hide:false

  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("access_2 onload")
    var that=this
    var title=options.title
    var name=options.name
    var already_hide=options.already_hide
    const db=wx.cloud.database()
    console.log(title)
    console.log(already_hide)
    this.setData({
      already_hide:true,
      not_already_hide: false
    })
    // var pages = getCurrentPages();
    // var prevPage = pages[pages.length - 2];
    // var length = prevPage.data.alreadyevents.length
    // console.log(prevPage.data.alreadyevents[0].name)
    if (already_hide == "true"){       //这里把传入的already_hide值当做成string类型了                          //if1 开端
      this.setData({
        already_hide: true,
        not_already_hide: false,
      })
      console.log(already_hide)
      db.collection('Project').where({
        name:name,
        title:title
      }).get({
        success:function(res){
          console.log(res.data)
          var length=res.data.length
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
          [alnoscore]: 5-res.data[i].score,
          [alcomment]: res.data[i].comment,
          [addone_2]:0,
          [addzero_2]:5,
        })
                }
        }
      })
    // if (length > 0) {                                   //if 开端
    //   for (var i = 0; i < length; i++) {
    //     var alname = "alreadyevents[" + i + "].name"
    //     var altime = "alreadyevents[" + i + "].time"
    //     var altitle = "alreadyevents[" + i + "].title"
    //     var alintroduction = "alreadyevents[" + i + "].introduction"
    //     var algains = "alreadyevents[" + i + "].gains"
    //     var alscore = "alreadyevents[" + i + "].score"
    //     var alcomment = "alreadyevents[" + i + "].comment"
    //     that.setData({
    //       [alname]: prevPage.data.alreadyevents[i].name,
    //       [altime]: prevPage.data.alreadyevents[i].time,
    //       [altitle]: prevPage.data.alreadyevents[i].title,
    //       [alintroduction]: prevPage.data.alreadyevents[i].introduction,
    //       [algains]: prevPage.data.alreadyevents[i].gains,
    //       [alscore]: prevPage.data.alreadyevents[i].score,
    //       [alcomment]: prevPage.data.alreadyevents[i].comment
    //     })
    //     // console.log(that.data.alreadyevents[0])
    //     // console.log("test")
    //   }
    // }                          //if结尾
  }                                          //if1 结尾
  else{
      this.setData({
        already_hide: false,
        not_already_hide: true
      })
    db.collection('Project-N').where({
      name:name,
      title:title
    }).get({
      success:function(res){
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
            [alone_2]:0,
            [alzero_2]:5,

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
//   sayHello:function()
//   {
// console.log("hello")
//   },
  in_xin: function (e) {
    // var timeOut = setTimeout(function () {            ///一个延迟调用的例子
    //   console.log("延迟调用============")
    //   wx.navigateBack()
    // }, 2000)

    var in_xin = e.currentTarget.dataset.in;
    // console.log(in_xin);
    //     console.log(e.currentTarget.id);
    if (in_xin == 0) {
      // console.log(e.currentTarget.id);
      console.log(Number(e.currentTarget.id) );
      
      // console.log(index);
      // this.setData({
      //   one_2: 0,
      //   zero_2:5
      // })
      this.setData({
        // [alone_2]: Number(e.currentTarget.id) + this.data.one_2,
        // [alzero_2]: 5 - (Number(e.currentTarget.id) + this.data.one_2)
      })     
    }
    else {
      sayHello()
      console.log(e.currentTarget.id);
      // console.log(e.currentTarget.id+this.data.one_2);
      this.setData({
        one_2: Number(e.currentTarget.id),
        zero_2: 5 - Number(e.currentTarget.id)
      })
     
    }
    console
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
    console.log("onUnload")
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
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
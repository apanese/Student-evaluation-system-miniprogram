Page({

  /**
   * 页面的初始数据
   */
  data: {
    already_hide:true,
    not_already_hide:false,
    name:"",
    title: ["道德品质","学习能力","交流合作与创新实践","运动与健康","审美","表演能力","公民素养"],
    already_num_sum:0,
    not_already_num_sum: 0,
    already_num: [],
    show_num:[],
    not_already_num: [],            //用数组记录已评价和未评价各标题的数量   already_num[0]是“已评价道德品质”的数量
    alreadyevents: [
      {
        title: "",
        name: "",
        time: "2019",
        introduction: "",
        gains: "",
        score: "",
        comment: ["", ""]
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
        comment: ["", ""]
      },
    ],
    postId2: 50,
    postId3: 0,
    text: "开始加载",
    hidden: true,
    test: 0,
    already: "active",
    not: "inactive",
    id:"",
    student1: {
      name:"",     
    },
    student2: {

    },
    student3: {

    },
    student4: {

    },
    student5: {

    },
  },
  click: function (e) {
    var id = e.currentTarget.dataset.detail;
    if (id == '1')    // JS里面字符串是可以用等号直接判定的
    {
      this.setData({ already: "active" });
      this.setData({ not: "inactive" });
      this.setData({already_hide:true});
      this.setData({ not_already_hide:false });
    }
    else {
      this.setData({ already: "inactive" });
      this.setData({ not: "active" });
      this.setData({ already_hide: false});
      this.setData({ not_already_hide:true});
    }

  },
  lookmap: function (e) {
    var that=this
    const db=wx.cloud.database()
    if(this.data.already_hide){
    db.collection('Project').where({
      title:e.currentTarget.dataset.title,
      name:this.data.name
    }).get({
      success:function(res){
        console.log(res.data)
        var length=res.data.length
        console.log(res.data.length)
        if(length>0)
        {                                   //if 开端
        for(var i=0;i<length;i++){
          var alname ="alreadyevents["+i+"].name"
          var altime = "alreadyevents[" + i + "].time"
          var altitle = "alreadyevents[" + i + "].title"
          var alintroduction= "alreadyevents[" + i + "].introduction"
          var algains = "alreadyevents[" + i + "].gains"
          var alscore = "alreadyevents[" + i + "].score"
          var alcomment = "alreadyevents[" + i + "].comment"
        that.setData({
          [alname]:res.data[i].name,
          [altime]: res.data[i].time,
          [altitle]: res.data[i].title,
          [alintroduction]: res.data[i].introduction,
          [algains]: res.data[i].gains,
          [alscore]: res.data[i].score,
          [alcomment]: res.data[i].comment
        })
        // console.log(that.data.alreadyevents[0])
        // console.log("test")
        }
      }                          //if结尾
      }
    })
    }
    else{
      db.collection('Project-N').where({
        title: e.currentTarget.dataset.title,
        name: this.data.name
      }).get({
        success: function (res) {
          console.log(res.data)
          var length = res.data.length
          if(length>0){
          for (var i = 0; i < length; i++) {
            var alname = "not_alreadyevents[" + i + "].name"
            var altime = "not_alreadyevents[" + i + "].time"
            var altitle = "not_alreadyevents[" + i + "].title"
            var alintroduction = "not_alreadyevents[" + i + "].introduction"
            var algains = "not_alreadyevents[" + i + "].gains"
            // var alscore = "not_alreadyevents[" + i + "].score"
            // var alcomment = "not_alreadyevents[" + i + "].comment"
            that.setData({
              [alname]: res.data[i].name,
              [altime]: res.data[i].time,
              [altitle]: res.data[i].title,
              [alintroduction]: res.data[i].introduction,
              [algains]: res.data[i].gains,
              // [alscore]: res.data[i].score,
              // [alcomment]: res.data[i].comment
            })
            // console.log(that.data.alreadyevents[0])
            console.log("test")
          }
        }
        }
      })
    }
    wx.navigateTo({
      url: '../access_2/access_2?name='+this.data.name+'&title='+e.currentTarget.dataset.title+'&already_hide='+this.data.already_hide,
    })

  },
  lookmap_test: function (e) {
    var that = this
    const db = wx.cloud.database()
    if (this.data.already_hide) {
      db.collection('Project').where({
        title: e.currentTarget.dataset.title,
        name: this.data.name
      }).get({
        success: function (res) {
          console.log(res.data)
          var length = res.data.length
          console.log(res.data.length)
          if (length > 0) {                                   //if 开端
            for (var i = 0; i < length; i++) {
              var alname = "alreadyevents[" + i + "].name"
              var altime = "alreadyevents[" + i + "].time"
              var altitle = "alreadyevents[" + i + "].title"
              var alintroduction = "alreadyevents[" + i + "].introduction"
              var algains = "alreadyevents[" + i + "].gains"
              var alscore = "alreadyevents[" + i + "].score"
              var alcomment = "alreadyevents[" + i + "].comment"
              that.setData({
                [alname]: res.data[i].name,
                [altime]: res.data[i].time,
                [altitle]: res.data[i].title,
                [alintroduction]: res.data[i].introduction,
                [algains]: res.data[i].gains,
                [alscore]: res.data[i].score,
                [alcomment]: res.data[i].comment
              })
              // console.log(that.data.alreadyevents[0])
              // console.log("test")
            }
          }                          //if结尾
        }
      })
    }
    else {
      db.collection('Project-N').where({
        title: e.currentTarget.dataset.title,
        name: this.data.name
      }).get({
        success: function (res) {
          console.log(res.data)
          var length = res.data.length
          if (length > 0) {
            for (var i = 0; i < length; i++) {
              var alname = "not_alreadyevents[" + i + "].name"
              var altime = "not_alreadyevents[" + i + "].time"
              var altitle = "not_alreadyevents[" + i + "].title"
              var alintroduction = "not_alreadyevents[" + i + "].introduction"
              var algains = "not_alreadyevents[" + i + "].gains"
              // var alscore = "not_alreadyevents[" + i + "].score"
              // var alcomment = "not_alreadyevents[" + i + "].comment"
              that.setData({
                [alname]: res.data[i].name,
                [altime]: res.data[i].time,
                [altitle]: res.data[i].title,
                [alintroduction]: res.data[i].introduction,
                [algains]: res.data[i].gains,
                // [alscore]: res.data[i].score,
                // [alcomment]: res.data[i].comment
              })
              // console.log(that.data.alreadyevents[0])
              console.log("test")
            }
          }
        }
      })
    }
    wx.navigateTo({
      url: '../test/test?name=' + this.data.name + '&title=' + e.currentTarget.dataset.title + '&already_hide=' + this.data.already_hide,
    })

  },
  change: function () {
    this.data.postId3 = 15;
    this.data.hidden = !this.data.hidden;
    console.log(this.data.hidden)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log("access_1 onload")
    var that=this
    // var postId = options.id;
    // console.log(this.data.hidden);
    // console.log(postId);
    // this.data.postId3 = postId;
    // console.log(this.data.postId3);
    console.log(option)
    console.log(this.data.not_already_num)
    let aln='this.data.not_already_num'
    console.log(aln)
    // this.data.not_already_num[0]=50
    this.setData({
      name:option.id,
      'not_already_num[1]':1,
    })
    const db=wx.cloud.database()                             
    db.collection('Project').where({         // where0_start
      title:that.data.title[0],
      name:that.data.name
    }).get({
      success:function(res){
       
        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[0]':res.data.length,
          already_num_sum:that.data.already_num_sum+res.data.length
        })
        console.log(res.data)
      }
    })              //where0_end
    db.collection('Project').where({         // where1_start
      title: that.data.title[1],
      name: that.data.name
    }).get({
      success: function (res) {
      
        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[1]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where1_end
    db.collection('Project').where({         // where2_start
      title: that.data.title[2],
      name: that.data.name
    }).get({
      success: function (res) {
      
        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[2]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where2_end
    db.collection('Project').where({         // where3_start
      title: that.data.title[3],
      name: that.data.name
    }).get({
      success: function (res) {
        
        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[3]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where3_end
    db.collection('Project').where({         // where4_start
      title: that.data.title[4],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[4]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where4_end
    db.collection('Project').where({         // where5_start
      title: that.data.title[5],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[5]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where5_end
    db.collection('Project').where({         // where6_start
      title: that.data.title[6],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'already_num[6]': res.data.length,
          already_num_sum: that.data.already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where6_end

    db.collection('Project-N').where({         // where0_start
      title: that.data.title[0],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[0]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })              //where0_end
    db.collection('Project-N').where({         // where1_start
      title: that.data.title[1],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[1]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where1_end
    db.collection('Project-N').where({         // where2_start
      title: that.data.title[2],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[2]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where2_end
    db.collection('Project-N').where({         // where3_start
      title: that.data.title[3],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[3]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where3_end
    db.collection('Project-N').where({         // where4_start
      title: that.data.title[4],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[4]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where4_end
    db.collection('Project-N').where({         // where5_start
      title: that.data.title[5],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[5]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where5_end
    db.collection('Project-N').where({         // where6_start
      title: that.data.title[6],
      name: that.data.name
    }).get({
      success: function (res) {

        that.setData({
          // ['already_num['+i+']']:10        这是数组里有变量时的赋值方式
          'not_already_num[6]': res.data.length,
          not_already_num_sum: that.data.not_already_num_sum + res.data.length
        })
        console.log(res.data)
      }
    })                                       //where6_end

  },
  changeIndexInE: function () {                        //获取前一个页面的数据
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      index: 0
    })
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("生命周期函数--监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("生命周期函数--监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("生命周期函数--监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("生命周期函数--监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("页面相关事件处理函数--监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面上拉触底事件的处理函数")
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("用户点击右上角分享")
  }
})
const app=getApp()
Page({
    data:{
      url:'',
      openid:'',
      name:'点击登录',
      isRegister:'true',
      isLogin:'false',
      userInfo:{},
    },
    onLoad:function(){
    },
    onGotUserInfo: function (e) {
      var that=this
      if (!this.logged && e.detail.userInfo) {
        app.globalData.url=e.detail.userInfo.avatarUrl
       
        this.setData({
          logged: true,
          url: e.detail.userInfo.avatarUrl,
          userInfo: e.detail.userInfo,
         
        })
      }
      wx.cloud.callFunction({
        name: 'login',
        data: { },
        success: res => {                   
          app.globalData.openid = res.result.openid
          const db = wx.cloud.database()
          db.collection('Userinfo').where({
            openid: "dfsdf"
          })
            .get({
              success: function (res) {
                // res.data 是包含以上定义的两条记录的数组 
                console.log(app.globalData.openid)
                console.log(res.data.length)
                that.setData({
                test:res.data.length
                })
                
                if(that.data.test!=1)
                {
                  console.log(res.data.length)
                  wx.navigateTo({
                    url: '../register/register'
                  })
                }
                else{
                  that.setData({
                    name: res.data[0].name
                  })
                  
                }
              },
              fail:function(res){
                wx.navigateTo({
                  url: '../register/register'
                })
              }
            })
        },
        fail: err => {
          // console.log(app.globalData.openid)
         
        }
      })     
    },
onUserInfoClick: function () {
  wx.navigateTo({
    url:'../register/register'
  })
 
},

})

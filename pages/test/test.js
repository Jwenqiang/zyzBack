// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData();
    console.log(wx.getMenuButtonBoundingClientRect())
    this.getProject();
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

  },
  getProject(){
    var that=this;
    return new Promise(function(resolve){
      wx.request({
        url: 'https://spapi.centaline.com.cn/api/Project/GetProjectById',
        method:"get",
        data:{Id:'2279'},
        success:res=>{
          console.log(res);
        }
      })
    })

  },  
  getData(){
    var that=this;
    wx.request({
      url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN',
      method:"post",
      data:{
        access_token:"",
        scene:""
      },
      success:res=>{
        console.log(res);
      }
    })
  }
})
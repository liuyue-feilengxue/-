// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    
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
    return{
      title : 'hello'
    }
  },
  handleShowToast(){
    wx.showToast({
      title: '完成',
    })
  },
  handleShowModal(){
    wx.showModal({
      title : 'ok',
      success : function(res){
        console.log(res)
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: 'hello',
    })
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
    })
  }
})
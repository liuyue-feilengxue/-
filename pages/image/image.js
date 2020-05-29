// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath : ''
  },
  handleChooseAlbum :function(){
    wx.chooseImage({
      complete: (res) => {
        const path = res.tempFilePaths[0]

        this.setData({
          imagePath : path
        })
      },
    })
  }
})
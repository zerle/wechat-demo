// pages/demo11/demo11.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    html:'<div>div标签内容</div>',
    htmlArr: [
      {
        name:"div",        // div标签 name属性来指定
        attrs: {          // 标签商有哪些属性 class style
          class: "my_div",
          style: "color:red"
        },
        children: [   // 子节点 children 要接受的数据类型和 nodes第二种渲染方式的数据类型一一致
          {
            name: "p",
            attrs: {},
            children: [
              {
                type: 'text',
                text: 'hello'
              }
            ]
          }
        ]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

  }
})
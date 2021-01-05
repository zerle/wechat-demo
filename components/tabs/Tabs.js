// components/tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 要接受的数据的名称
    tabs:{
      // 要接受的数据的类型
      type:Array,
      // 默认值
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /*
      1 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下
      2 组件.js 文件中 存放事件回调函数的时候 存放在methods中
    */
   handleItemTabs(e) {
    const {index} = e.currentTarget.dataset
    this.triggerEvent('itemChange', {index})
   }
  }
})

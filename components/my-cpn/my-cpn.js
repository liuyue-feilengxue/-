// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // title : String
    title :{
      type : String,
      value : "默认标题"
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
    handleInc(){
      this.triggerEvent("increment",{},{})
    }
  },
  options : {
    multipleSlots : true
  }
})

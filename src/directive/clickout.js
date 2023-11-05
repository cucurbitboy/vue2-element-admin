/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 17:17:51
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 17:17:55
 * @FilePath: /vue-element-admin/src/directive/clickout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const clickOut = {
  bind(el, { value }) {
    function clickHandler(e) {
      // 先判断点击的元素是否是本身，如果是本身，则返回
      if (el.contains(e.target)) return
      // 判断指令中是否绑定了函数
      if (typeof value === 'function') {
        // 如果绑定了函数，则调用函数，此处value就是clickImgOut方法
        value()
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.handler = clickHandler
    // 添加事件监听
    setTimeout(() => {
      document.addEventListener('click', el.handler)
    }, 0)
  },
  unbind(el) {
    // 解除事件监听
    document.removeEventListener('click', el.handler)
  }
}

export default clickOut

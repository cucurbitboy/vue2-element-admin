/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 17:07:43
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 17:07:53
 * @FilePath: /vue-element-admin/src/directive/thtottle.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const throttle = {
  bind: function(el, { value: { fn, time }}) {
    if (typeof fn !== 'function') return
    el._flag = true// 开关默认为开
    el._timer = null
    el.handler = function() {
      if (!el._flag) return
      // 执行之后开关关闭
      el._flag && fn()
      el._flag = false
      if (el._timer !== null) {
        clearTimeout(el._timer)
        el._timer = null
      }
      el._timer = setTimeout(() => {
        el._flag = true// 三秒后开关开启
      }, time)
    }
    el.addEventListener('click', el.handler)
  },
  unbind: function(el, binding) {
    el.removeEventListener('click', el.handler)
  }
}

export default throttle

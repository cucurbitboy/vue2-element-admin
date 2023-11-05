/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 17:00:13
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 17:00:17
 * @FilePath: /vue-element-admin/src/directive/debounce.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const debounce = {
  inserted: function(el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  }
}

export default debounce

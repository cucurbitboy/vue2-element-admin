/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-10-30 23:58:41
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 17:06:44
 * @FilePath: /vue-element-admin/src/directive/draggable.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const draggable = {
  inserted: function(el) {
    el.style.cursor = 'move'
    el.onmousedown = function(e) {
      const disx = e.pageX - el.offsetLeft
      const disy = e.pageY - el.offsetTop
      document.onmousemove = function(e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        const maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        const maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}
export default draggable

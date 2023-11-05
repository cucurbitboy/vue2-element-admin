/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 15:45:35
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 15:49:14
 * @FilePath: /vue-element-admin/src/directive/water-mark.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function addWaterMarker(str, parentNode, font, textColor) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 200
  can.height = 150
  can.style.display = 'none'
  var cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

const waterMarker = {
  bind: function(el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  }
}

export default waterMarker

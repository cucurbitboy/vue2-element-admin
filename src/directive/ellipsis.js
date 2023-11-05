/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 17:21:29
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 17:29:54
 * @FilePath: /vue-element-admin/src/directive/ellipsis.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function(el, binding) {
  const width = !binding.arg ? `100px`
    : typeof binding.arg === 'number'
      ? `${binding.arg}px` : binding.arg
  el.style.width = `${width}`
  el.style.whiteSpace = 'nowrap'
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
}

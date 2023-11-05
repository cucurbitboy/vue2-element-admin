// /*
//  * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
//  * @Date: 2023-11-04 17:14:31
//  * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
//  * @LastEditTime: 2023-11-04 17:14:35
//  * @FilePath: /vue-element-admin/src/directive/backtop.js
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// export default {
//   bind(el, binding, vnode) {
//     // 响应点击后滚动到元素顶部
//     el.addEventListener('click', () => {
//       const target = binding.arg ? document.getElementById(binding.arg) : window
//       target.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       })
//     })
//   },
//   update(el, binding, vnode) {
//     // 滚动到达参数值才出现绑定指令的元素
//     const target = binding.arg ? document.getElementById(binding.arg) : window
//     if (binding.value) {
//       target.addEventListener('scroll', (e) => {
//         var node = e.srcElement || e.target
//         if (node.scrollTop > binding.value) {
//           el.style.visibility = 'unset'
//         } else {
//           el.style.visibility = 'hidden'
//         }
//       })
//     }
//     // 判断初始化状态
//     if (target.scrollTop < binding.value) {
//       el.style.visibility = 'hidden'
//     }
//   },
//   unbind(el) {
//     const target = binding.arg ? document.getElementById(binding.arg) : window
//     target.removeEventListener('scroll')
//     el.removeEventListener('click')
//   }
// }

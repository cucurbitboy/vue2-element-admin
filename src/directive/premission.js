/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 15:51:44
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 15:51:49
 * @FilePath: /vue-element-admin/src/directive/premission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function checkArray(key) {
  const arr = ['1', '2', '3', '4']
  const index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}

const permission = {
  inserted: function(el, binding) {
    const permission = binding.value // 获取到 v-permission的值
    if (permission) {
      const hasPermission = checkArray(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

export default permission

/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 16:51:52
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 16:53:05
 * @FilePath: /vue-element-admin/src/directive/index.js
 * @Description: 定义指令入口文件，批量注册指令，然 main.js 里 use 使用全局指令
 */
import copy from './copy'
import longpress from './longpress'
// 自定义指令
const directives = {
  copy,
  longpress
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}

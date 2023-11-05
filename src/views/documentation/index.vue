<!--
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-10-24 21:46:32
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-05 16:55:18
 * @FilePath: /vue-element-admin/src/views/documentation/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div v-waterMarker="{text:'qinhuansky',textColor:'rgba(180, 180, 180, 0.4)'}" class="app-container documentation-container">
      <div v-draggable class="el-dialog">拖拽指令</div>
      <div v-longpress class="el-dialog">是否长按</div>
      <!-- <img v-LazyLoad="xxx.jpg" /> -->
      <!-- <input type="text" v-model="note" v-emoji /> -->
      <button v-copy="copyText">复制</button>
      <button v-debounce="debounce">debounce防抖</button>
      <button v-throttle="{fn: throttle,time:3000}">throttle节流</button>
      <div v-ellipsis:100px>需要省略的文字需要省略的文字需要省略的文字需要省略的文字</div>
      <!-- <div class="el-dialog" v-clickout="clickout">点击此元素外</div> -->

      <a class="document-btn" target="_blank" href="https://store.akveo.com/products/vue-java-admin-dashboard-spring?utm_campaign=akveo_store-Vue-Vue_demo%2Fgithub&utm_source=vue_admin&utm_medium=referral&utm_content=demo_English_button">Java backend integration</a>
      <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">Documentation</a>
      <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">Github Repository</a>
      <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">国内文档</a>
      <dropdown-menu class="document-btn" :items="articleList" title="系列文章" />
      <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/">内推招聘</a>
      <div v-backtop:app="400"> 回到顶部1 </div>
      <div v-backtop> 回到顶部2 </div>

    </div>
    <!-- resize -->
    <div class="container">
      <div
        v-resize.left
        class="left"
      >left</div>
      <div class="right">right</div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'
import draggable from '@/directive/draggable.js'
import longpress from '@/directive/longpress'
import LazyLoad from '@/directive/lazy-load-img'
import waterMarker from '@/directive/water-mark'
import noemoji from '@/directive/noemoji'
import copy from '@/directive/copy'
import debounce from '@/directive/debounce'
import throttle from '@/directive/throttle'
import backtop from '@/directive/backtop'
import clickout from '@/directive/clickout'
import ellipsis from '@/directive/ellipsis'
import resize from '@/directive/resize'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  directives: { draggable, waterMarker, longpress, LazyLoad, noemoji, copy, debounce, throttle, backtop, clickout, ellipsis, resize },
  data() {
    return {
      copyText: 'a copy directives',
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: 'v4.0 篇', href: 'https://juejin.im/post/5c92ff94f265da6128275a85' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ]
    }
  },
  methods: {
    longpress() {
      alert('长按指令生效')
    },
    debounce() {
      console.log(1)
    },
    throttle() {
      console.log(2)
    },
    clickout() {
      console.log(3)
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  height: 60vh;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
      .el-dialog{
        width: 120px;
        height: 120px;
        background: red;
    }

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
.container {
  width: 400px;
  height: 100px;
  > div {
    float: left;
    height: 100%;
    width: 50%;
  }
  .left {
    background-color: lightcoral;
  }
  .right {
    background-color: lightblue;
  }
}
</style>

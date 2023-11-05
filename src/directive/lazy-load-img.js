/*
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-11-04 16:30:12
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 16:30:38
 * @FilePath: /vue-element-admin/src/directive/lazy-load-img.js
 * @Description: 图片懒加载有两种方式可以实现，一是绑定 srcoll 事件进行监听，二是使用 IntersectionObserver 判断图片是否到了可视区域，但是有浏览器兼容性问题。
 * 解决方案：判断浏览器是否支持 IntersectionObserver API，如果支持就使用 IntersectionObserver 实现懒加载，否则则使用 srcoll 事件监听 + 节流的方法实现
 */
const LazyLoad = {
  // install方法
  install(Vue, options) {
    const defaultSrc = options.default
    Vue.directive('lazy', {
      bind(el, binding) {
        LazyLoad.init(el, binding.value, defaultSrc)
      },
      inserted(el) {
        if (IntersectionObserver) {
          LazyLoad.observe(el)
        } else {
          LazyLoad.listenerScroll(el)
        }
      }
    })
  },
  // 初始化
  init(el, val, def) {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
  },
  // 利用IntersectionObserver监听el
  observe(el) {
    var io = new IntersectionObserver((entries) => {
      const realSrc = el.dataset.src
      if (entries[0].isIntersecting) {
        if (realSrc) {
          el.src = realSrc
          el.removeAttribute('data-src')
        }
      }
    })
    io.observe(el)
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.load, 300)
    LazyLoad.load(el)
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  // 加载真实图片
  load(el) {
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  },
  // 节流
  throttle(fn, delay) {
    let timer
    let prevTime
    return function(...args) {
      const currTime = Date.now()
      const context = this
      if (!prevTime) prevTime = currTime
      clearTimeout(timer)

      if (currTime - prevTime > delay) {
        prevTime = currTime
        fn.apply(context, args)
        clearTimeout(timer)
        return
      }

      timer = setTimeout(function() {
        prevTime = Date.now()
        timer = null
        fn.apply(context, args)
      }, delay)
    }
  }
}

export default LazyLoad

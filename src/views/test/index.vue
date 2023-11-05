<!--
 * @Author: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @Date: 2023-10-30 23:52:52
 * @LastEditors: chuanqin.yeh@foxmail.com chuanqin3@iflytek.com
 * @LastEditTime: 2023-11-04 15:38:44
 * @FilePath: /vue-element-admin/src/views/test/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-draggable class="el-dialog">1</div>
</template>
<script>
import draggable from '@/directive/draggable.js'
export default {
  directives: { draggable }
}
</script>
    <style scoped>
    .el-dialog{
        width: 120px;
        height: 120px;
        background: red;
    }
    </style>

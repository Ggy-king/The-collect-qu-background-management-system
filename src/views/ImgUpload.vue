<template>

      <!-- 地址提示 -->
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>PDF收题系统</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 主体部分 -->
      <div :style="{ padding: '10px', background: '#fff', minHeight: '640px',position: 'relative' }">
          <StepsA />
          <ImgUp />
      </div>

  
</template>
<script>
import { defineComponent } from 'vue';
import ImgUp from './imgup/ImgUp.vue';
import StepsA from './imgup/StepsA.vue';
// 公共组件

export default defineComponent({
    name: "PdfUpload",
    components: { StepsA, ImgUp }
});

</script>
<style>
</style>
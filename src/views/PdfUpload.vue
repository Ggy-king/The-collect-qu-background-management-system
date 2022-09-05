<template>
<a-layout style="min-height: 100vh">
  <SiderCom />
  <a-layout>
    <HeaderCom />
    <a-layout-content style="margin: 0 16px;background-color: #f1f2f7">
      <!-- 地址提示 -->
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>pdf-upload</a-breadcrumb-item>
      </a-breadcrumb>
      <!-- 主体部分 -->
      

      </a-layout-content>
      <FooterCom />
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent } from 'vue';
// 公共组件
import SiderCom from '@/components/SiderCom'
import HeaderCom from '@/components/HeaderCom'
import FooterCom from '@/components/FooterCom'

export default defineComponent({
  name:'PdfUpload',
  components: {
    SiderCom,
    HeaderCom,
    FooterCom
},
});
</script>
<style>
</style>
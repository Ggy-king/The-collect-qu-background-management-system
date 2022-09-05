<template>
  <a-layout style="min-height: 100vh">
    <SiderCom />
    <a-layout>
      <HeaderCom />
      <a-layout-content style="margin: 0 16px;background-color: #f1f2f7">
        <!-- 地址提示 -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>Welcome</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 主体部分 -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <WelcomeView />
        </div>

      </a-layout-content>
      <FooterCom />
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue';
// 公共组件
import WelcomeView from '@/views/WelcomeView'
import SiderCom from '@/components/SiderCom'
import HeaderCom from '@/components/HeaderCom'
import FooterCom from '@/components/FooterCom'
export default defineComponent({
  components: {
    WelcomeView,
    SiderCom,
    HeaderCom,
    FooterCom
},
});
</script>
<style>
</style>
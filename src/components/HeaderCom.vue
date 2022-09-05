<template>
    <a-layout-header style="background: #fff; padding: 0">
        <span class="head-title-str">您好 </span>
        <span class="head-title-nor"> / 欢迎体验收题系统</span>
    </a-layout-header>
</template>
  
<script>
  export default {
    name:'HeaderCom'
  }
</script>

<style lang="scss">
/* 标题文字样式 */
.head-title-str {
  margin-left: 20px;
  font-weight: bold;
  font-size: 18px;
}
.head-title-nor {
  font-size: 14px;
  color:rgb(63, 53, 53);
}
</style>
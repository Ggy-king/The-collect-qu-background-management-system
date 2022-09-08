<template>
    <!-- 地址提示 -->
    <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>首页</a-breadcrumb-item>
    <a-breadcrumb-item>查看已收藏</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 主体部分 -->
    <div :style="{ padding: '14px', minHeight: '600px' }" class="bgc">
      <DoneList />
    </div>

</template>
<script>
import { defineComponent } from 'vue';
import DoneList from './done/DoneList.vue';


export default defineComponent({
    name: "DoneCollect",
    components: { DoneList }
});
</script>
<style lang="scss">
.bgc {
    // background: linear-gradient(to bottom right, #9FA5D5, #E8F5C8)
    background-color: #fff;
}
</style>







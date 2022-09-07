<template>
        <!-- 地址提示 -->
        <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>寻找更多优秀的题集</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 主体部分 -->
        <div :style="{ padding: '24px', background: '#fff', minHeight: '600px',position:'relative' }">
           <BottomA />
           <CheckList />
        </div>

</template>
<script>
import { defineComponent } from 'vue';
import BottomA from '@/views/check/BottomA.vue';
import CheckList from './check/CheckList.vue';


export default defineComponent({
    name: "CheckCollect",
    components: { BottomA, CheckList,  }
});
</script>
<style>
</style>







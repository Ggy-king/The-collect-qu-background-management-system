<template>
    <div class="abc">
        <el-row>
            <el-button @click="onPreview" size="small">预览</el-button>
        </el-row>
        <el-dialog title="预览合同附件" v-model:visible="viewVisible" center width="60%" @close='closePreview'>
            <el-row :gutter="20">
                <span>共{{pageCount}}页， 当前第 {{pdfPage}} 页 </span>
                <el-button type="text" size="mini" @click.stop="previousPage">上一页</el-button>
                <el-button type="text" size="mini" @click.stop="nextPage">下一页</el-button>
            </el-row>
            <div>
                <pdf :src="src" :page="pdfPage" @num-pages="pageCount = $event" @page-loaded="pdfPage = $event" style="display: inline-block; width: 100%"></pdf>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
import store from '@/store/'
export default {
    components:{
        pdf
    },
    data(){
        return {
            viewVisible: false,
            src: null,
            pdfPage : 1,
            pageCount: 0,
            token: store.getters.access_token,
        }
    },
    methods:{
        onPreview(){
            this.src = pdf.createLoadingTask({
                url: 'chrome-extension://ibllepbpahcoppkjjllbabhnigcbffpi/file:///C:/Users/HP/Desktop/C017%20%E8%96%84%E6%99%93%E6%A5%A0%20-%E8%91%A3%E4%B8%80%E5%B8%86-%E9%AB%98%E5%B9%BF%E6%BA%90(5).pdf',
                httpHeaders: {Authorization:'Bearer '+ this.token}
            });
            this.src.promise.then(pdf => {
                this.viewVisible = true;
            });
        },
        closePreview(){
            this.pdfPage = 1;
        },
        previousPage(){
            let p = this.pdfPage
            p = p > 1 ? p-1 : this.pageCount
            this.pdfPage = p
        },
        nextPage(){
            let p = this.pdfPage
            p = p < this.pageCount ? p+1 : 1
            this.pdfPage = p
        }
    }
}
</script>

<style lang="scss">
.abc {
    position: absolute;
    top: 0;
    background-color: red;
    z-index: 999;
}
</style>
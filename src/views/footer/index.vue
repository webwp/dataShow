<template>
    <div class='box footBox'>
        <!-- 四角 -->
        <span class='horn hornLeftTop'></span>
        <span class='horn hornleftBottom'></span>
        <span class='horn hornRightTop'></span>
        <span class='horn hornRightBottom'></span>
        <h4 class="model-title">平台上线至今全国数据总览</h4>
        <el-row :gutter="20">
            <el-col :span="7">
                <div class="footBar bar-one"><BarCharts v-bind:d="{title:'系统故障',data:systemDiagnost,type:'syatem'}" /></div>
                <div class="footBar bar-two"><BarCharts v-bind:d="{title:'品牌故障',data:brandDiagnost,type:'brand'}" /></div>
            </el-col>
            <el-col :span="7">
                <Testing />
            </el-col>
            <el-col :span="10">
                <Numbers />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import BarCharts from "./component/barCharts"
import Testing from "./component/testing"
import Numbers from "./component/Number"
import { mapState } from "vuex"
export default {
    name:"Footer",
    components:{
        "BarCharts":BarCharts,
        "Testing":Testing,
        "Numbers":Numbers
    },

    computed:{
        ...mapState({
            report(state){
                return state.report.report
            }
        })
    },


    watch:{
        report:{
            handler(cur,old){
                if(cur[0]){
                    this.systemDiagnost = cur[0].systemDiagnost
                    this.brandDiagnost = cur[0].brandDiagnost
                }
            },
            deep:true
        }
    },

    data(){
        return {
            reportData:[],
            systemDiagnost:[],
            brandDiagnost:[]
        }
    },

    methods:{

    },

    mounted(){
        if(this.report[0]){

            this.systemDiagnost = this.report[0].systemDiagnost
            this.brandDiagnost = this.report[0].brandDiagnost
        }
        
    }
};
</script>
<style>
.footBox {
    height:245px;
    margin: 20px 26px 12.5px 26px;
}
.footBar {
    height:100px;
}
</style>
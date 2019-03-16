<template>
    <div class="numberBox">
        <el-row>
            <el-col :span="4">材料费合计</el-col>
            <el-col :span="18"><DataList v-bind:num="{num:num,numberNg:datas.materialCost}"/></el-col>
            <el-col :span="2">元</el-col>
        </el-row>
        <el-row>
            <el-col :span="4">工时费合计</el-col>
            <el-col :span="18"><DataList v-bind:num="{num:num,numberNg:datas.timeFee}" /></el-col>
            <el-col :span="2">元</el-col>
        </el-row>
        <el-row>
            <el-col :span="4">总成交金额</el-col>
            <el-col :span="18"><DataList v-bind:num="{num:num,numberNg:datas.turnover}"/></el-col>
            <el-col :span="2">元</el-col>
        </el-row>
    </div>
</template>
<script>
import DataList from "@/views/today/component/dataList"
import { mapState } from "vuex"
export default {
    name:"Numbers",
    computed:{
        ...mapState({
            order(state){
                return state.order.order
            }
        })
    },
    components:{
        "DataList":DataList
    },

    data(){
        return {
            num:10,
            datas:{
                materialCost:0,
                timeFee:0,
                turnover:0
            }
        }
    },

    watch:{
        order:{
            handler(cur,old){
               this.datas = {
                    materialCost:cur[0].materialCost,
                    timeFee:cur[0].timeFee,
                    turnover:cur[0].turnover
               }
            },
            deep:true
        }
    },

    mounted(){
        if(this.order.length>0){
            this.datas = {
                materialCost:this.order[0].materialCost,
                timeFee:this.order[0].timeFee,
                turnover:this.order[0].turnover
            }
        }
        
    }
}
</script>
<style>
.numberBox {
    color:#fff
}
.numberBox .el-row {
    line-height:38px;
    padding: 15px 5px;
    font-size:14px;
}
</style>
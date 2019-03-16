<template>
    <div class="testingBox">
        <el-row>
            <el-col :span="16" class="textAlgin-l">健康检测报告全国累计生成</el-col>
            <el-col :span="8" class="textAlgin-r"><span class="listTextColor">{{resReport.reportCount}}</span>  份</el-col>
            <el-col :span="24"><span class="bgs" ref="bgs"><span class="one" style="width:100%"></span></span></el-col>
        </el-row>
        <el-row>
            <el-col :span="16" class="textAlgin-l">其中含有故障得检测报告</el-col>
            <el-col :span="8" class="textAlgin-r"><span class="listTextColor">{{resReport.faultReportCount}}</span>  份</el-col>
            <el-col :span="24"><span class="bgs"><span class="two" :style="{width:resReport.Proportion}"></span></span></el-col>
        </el-row>
        <el-row>
            <el-col :span="16" class="textAlgin-l">全国累计维修订单成交总量</el-col>
            <el-col :span="8" class="textAlgin-r"><span class="listTextColor">{{orderNum.number}}</span>  单</el-col>
            <el-col :span="24"><span class="bgs"><span class="three" :style="{width:orderNum.Proportion}"></span></span></el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name:"Testing",

    computed:{
        ...mapState({
            report(state){
               return state.report.report
            },
            order(state){
                return state.order.order
            }
        })
    },

    watch:{
        report:{
            handler(cur,old){

                this.resReport.reportCount = cur[0].reportCount,
                this.resReport.faultReportCount = cur[0].faultReportCount,
                this.resReport.Proportion = cur[0].faultReportCount/cur[0].reportCount * this.domWidth + "px"

            },
            deep:true
        },
        order:{
            handler(cur,old){
                

                let totalOrder = 0;
                cur[0].order.forEach(function(v,i){
                    if(v.name == config.allDefault){
                        totalOrder = v.number
                    }
                })

                const t = this;
                const index = setInterval(function(){
                    t.orderNum.Proportion = cur[0].volume/t.resReport.reportCount * t.domWidth + "px";
                    if(t.resReport.reportCount != 0){
                        clearInterval(index);
                    }
                },200)
                
                this.orderNum.number = cur[0].volume
                this.orderNum.Proportion = cur[0].volume/this.resReport.reportCount * this.domWidth + "px"
                
                //this.setBar(cur[0].autoParts,'bars');
            },
            deep:true
        },
    },

    mounted(){
        this.domWidth = this.$refs.bgs.clientWidth;
    },

    data(){
        return {
            resReport:{
                reportCount:0,
                faultReportCount:0,
                Proportion:0
            },
            orderNum:{
                number:0,
                Proportion:0
            },
            domWidth:0
        }
    }
};
</script>
<style>
.one,.two,.three {
    width:80%;
    height:10px;
    /*background:red;*/
    display:inline-block
}
.one {
     background: -webkit-linear-gradient(left, #139dfd , #01feff); /* For Safari 5.1 to 6.0 */
      background: -o-linear-gradient(right, #139dfd , #01feff); /* For Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(right, #139dfd , #01feff); /* For Firefox 3.6 to 15 */
      background: linear-gradient(to right,  #139dfd , #01feff); /* Standard syntax */
}
.two {

    background: -webkit-linear-gradient(left, #f7231c , #ffb800); /* For Safari 5.1 to 6.0 */
      background: -o-linear-gradient(right, #f7231c , #ffb800); /* For Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(right, #f7231c , #ffb800); /* For Firefox 3.6 to 15 */
      background: linear-gradient(to right,  #f7231c , #ffb800); /* Standard syntax */
}
.three {
    background: -webkit-linear-gradient(left, #009aff , #01f5fe); /* For Safari 5.1 to 6.0 */
      background: -o-linear-gradient(right, #009aff , #01f5fe); /* For Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(right, #009aff , #01f5fe); /* For Firefox 3.6 to 15 */
      background: linear-gradient(to right,  #009aff , #01f5fe); /* Standard syntax */
}
.testingBox {
    color:#fff;
    font-size:14px;
    line-height:24px;
    padding-top:15px;
}
.testingBox .el-row {
    margin-bottom:20px
}
.bgs {
    background:#22170e;
    height:10px;
    width:100%;
    display: inline-flex;
}
</style>
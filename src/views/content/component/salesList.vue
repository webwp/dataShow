<template>
    <div>
        <p style="color:#fff">平台汽配材料年度销售排行榜</p>
        <div class="salesList">
            <el-row :gutter="5" v-for="(item,index) in this.order.length>0 ? this.order[0].autoParts : []" :key="index" class="listItem">
                <el-col :span="7" class="textAlgin-l"><div class="grid-content bg-purple">{{index+1}}.{{item.name}}</div></el-col>
                <el-col :span="10" class="textAlgin-l"><div class="grid-content bg-purple bars" ref="bars"><span class="spanBar" :style="{width:(item.Proportion)+'px'}"></span></div></el-col>
                <el-col :span="7" class="textAlgin-r"><div class="grid-content bg-purple"><span class="listTextColor">{{item.number}}</span>  件</div></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name:"SalesList",
    data(){
        return {
            data:[
                {name:"机油",value:11150},
                {name:"机滤",value:1160},
                {name:"轮胎",value:1170},
                {name:"蓄电池",value:1180},
                {name:"雨刮器",value:1290},
                {name:"机油",value:1350},
                {name:"机滤",value:1460},
                {name:"轮胎",value:1170},
                {name:"蓄电池",value:1180},
                {name:"雨刮器",value:1190}
            ]
        }
    },

    computed:{
        ...mapState({
            order(state){
                return state.order.order
            }
        })
    },

    watch:{
        order:{
            handler(cur,old){
                this.setBar(cur[0].autoParts,'bars');
            },
            deep:true
        },
    },

    methods:{
        setBar(data,dom){
            var thisDomWidth = this.$refs.bars[0].offsetWidth;
            if(data){
                var Total = 0;
                data.forEach(function(v,i){
                    if(i==0){
                        data.forEach(function(v,i){
                            Total += v.number
                        })
                    }
                    v.Proportion = (v.number/Total)*thisDomWidth+thisDomWidth/3;
                })
                //this.data = data
            }
        }
    },
    mounted(){

        if(this.order.length>0){
            this.setBar(this.order[0].autoParts,'bars');
        }
        


    }
};
</script>
<style>
.salesList {
    height:340px;
    background:url("../../../assets/images/model-o.png") 0 bottom repeat-x;
    background-size:28px 365px;
    padding:12.5px;
}
.listTextColor {
    color:#ec6c00
}
.textAlgin-r {
    text-align:right
}
.textAlgin-l {
    text-align:left
}
.bg-purple { color:#fff }
.spanBar { 
    display:inline-block;
    height:10px;
    background: -webkit-linear-gradient(left, #f7231c , #ffb800); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(right, #f7231c , #ffb800); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(right, #f7231c , #ffb800); /* For Firefox 3.6 to 15 */
  background: linear-gradient(to right,  #f7231c , #ffb800); /* Standard syntax */
}
.listItem {
    line-height:35px;
}
</style>
<template>
    <div class="userWarp">
        <p style="color:#fff">平台累计用户量</p>
        <div class="userBox">
            <el-row>
                <el-col :span="12" class="textAlgin-l">金粉店</el-col>
                <el-col :span="12" class="textAlgin-r"><span class="listTextColor">{{county.vehicleRepairPlantCount}}</span> 家</el-col>
            </el-row>
            <el-row>
                <el-col :span="12" class="textAlgin-l">车主</el-col>
                <el-col :span="12" class="textAlgin-r"><span class="listTextColor">{{county.carOwnerCount}}</span> 位</el-col>
            </el-row>
            <el-row>
                <el-col :span="12" class="textAlgin-l">机动车</el-col>
                <el-col :span="12" class="textAlgin-r"><span class="listTextColor">{{county.vehicleCount}}</span> 辆</el-col>
            </el-row>
        </div>
        <p style="color:#fff;margin-top:12.5px">汽修竞价累计发起量</p>
        <div class="qxBox">
            <el-row v-for="(item,index) in order.length>0 ? order[0].order : []" :key="index">
                <el-col :span="12" class="textAlgin-l">{{item.name}}</el-col>
                <el-col :span="12" class="textAlgin-r"><span class="listTextColor">{{item.number}}</span> 单</el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name:"userData",
    computed:{
        ...mapState({
            userInfo(state){
                return state.User.user
            },
            order(state){
                return state.order.order
            }
        })
    },

    watch:{
        userInfo:{
            handler(cur,old){

                this.county = this.getUserInfo("全国",cur)
                
            },
            deep:true
        }
    },

    data(){
        return {
            county:{}
        }
    },

    methods:{
        getUserInfo(city,data){
            var res = {}
            // if(data.length > 0){
            //     data.forEach(function(v,i){
            //         if(v.province == city){
            //             res = v
            //         }
            //     })
            // }
            Object.keys(data).forEach(function(v,i){
                if(v == city){
                    res = data[v]
                }
            })
            return res
        },
    },

    mounted(){


        //this.county = this.getUserInfo("全国",this.userInfo)


    }
};
</script>
<style>
.userBox,.qxBox{
    padding:12.5px;
    color:#d2d1d0
}
.userBox {
    height:110px;
    background:url("../../../assets/images/model-bg.png") 0 bottom repeat-x;
    background-size:5px 135px;
}
.qxBox {
    height:171px;
    background:url("../../../assets/images/model-bg.png") 0 bottom repeat-x;
    background-size:5px 196px;
}
.userWarp .el-row {
    line-height: 35.5px;
}
</style>

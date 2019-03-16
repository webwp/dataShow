<template>
    <div class="contentBox">
        <el-row :gutter="15">
            <el-col :span="7">
                <SalesList />
            </el-col>
            <el-col :span="5">
                <userData />
            </el-col>
            <el-col :span="12">
                <MapData />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import SalesList from "./component/salesList"
import userData from "./component/userData"
import MapData from "./component/mapData"
import { mapState } from "vuex"
export default {
    name:"Content",
    components:{
        "SalesList":SalesList,
        "userData":userData,
        "MapData":MapData
    },
    computed:{
       ...mapState({
           userInfo(state){
                return this.$store.state.User.user;
           }
       })
    },
    watch:{
       userInfo:{
            handler(cur,old){
            },
            deep:true
       } 
    },
    data(){
        return {
            //userInfo:{}
        }
    },
    mounted(){
        // this.$store.dispatch("getUserInfo")
        // console.log("抽出一张：",this.$store)
        let t = this
        // setInterval(function(){
        //     console.log(t.userInfo)
        // },10000)
    }
};
</script>
<style>
.contentBox {
    height: 380px;
    margin: 10px 26px 12.5px 26px;
}
</style>
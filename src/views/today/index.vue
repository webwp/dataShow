<template>
    <div class='box'>
        <!-- 四角 -->
        <span class='horn hornLeftTop'></span>
        <span class='horn hornleftBottom'></span>
        <span class='horn hornRightTop'></span>
        <span class='horn hornRightBottom'></span>
        <h4 class="model-title">今日汽修竞价抢单实时检测</h4>
        <el-row :gutter="12">
            <el-col :span="14">
                <LineChart />
            </el-col>
            <el-col :span="5">
                <p style="color:#fff">{{Country.city}}</p>
                <div>
                    <DataList v-bind:numberNg="Country.orderCount" v-bind:num="{num:num,numberNg:Country.orderCount}"/>
                    <span style="color:#fff">单</span>
                </div>
                <div>
                    <DataList v-bind:numberNg="Country.goldPowderOrderCount" v-bind:num="{num:num,numberNg:Country.goldPowderOrderCount}" />
                    <span style="color:#fff">单</span>  
                </div>
                <div>
                    <DataList v-bind:numberNg="Country.dealCount" v-bind:num="{num:num,numberNg:Country.dealCount}" />
                    <span style="color:#fff">单</span>
                </div>
            </el-col>
            <el-col :span="5">
                <p style="color:#fff">{{citys.city}}</p>
                <div>
                    
                    <DataList v-bind:numberNg="citys.orderCount" v-bind:num="{num:num,numberNg:citys.orderCount}" />
                    <span style="color:#fff">单</span>
                </div>
                <div>
                    <DataList v-bind:numberNg="citys.goldPowderOrderCount" v-bind:num="{num:num,numberNg:citys.goldPowderOrderCount}" />
                    <span style="color:#fff">单</span>
                </div>
                <div>
                    <DataList v-bind:numberNg="citys.dealCount" v-bind:num="{num:num,numberNg:citys.dealCount}" />
                    <span style="color:#fff">单</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import LineChart from "./component/lineChart"
import DataList from "./component/dataList"
import { mapState } from "vuex"
export default {
    name:'TodayIndex',
    components:{
       "LineChart":LineChart,
       "DataList":DataList
    },
    computed:{
       ...mapState({
           orderToday(state){
               return state.orderToday.orderToday
           },
           User(state){
               return state.User
           }
       })
    },
    watch:{
        orderToday:{
            handler(cur,old){

                const Country = this.getOrderToday(config.allDefault,cur);
                const citys = this.getOrderToday(this.User.city? this.User.city:config.defaultCity,cur)
                this.Country = JSON.stringify(Country)=="{}"?this.Country:Country;
                this.citys = JSON.stringify(citys)=="{}"?this.citys : citys;
            },
            deep:true
        },
        User:{
            handler(cur,val){
                
                const citys = this.getOrderToday(cur.city!='' ? cur.city:config.defaultCity,this.orderToday);
                this.citys = JSON.stringify(citys) == "{}" ? this.citys : citys;
            },
            deep:true
        }

    },
    data(){
        return {
            num:6,
            Country:{
                city:config.allDefault

            },
            citys:{
                city:config.defaultCity

            }
        }
    },
    methods:{
        getOrderToday(city,data){
            var res = {}
            Object.keys(data).forEach(function(v,i){

                if(v == city){
                    res = data[v]
                }
            })

            return res;
        }
    },
    mounted(){
        const Country = this.getOrderToday(config.allDefault,this.orderToday);
        const citys = this.getOrderToday(this.User.city? this.User.city:config.defaultCity,this.orderToday);
        this.Country = JSON.stringify(Country) == "{}" ? this.Country : Country;
        this.citys = JSON.stringify(citys) == "{}" ? this.citys : citys;
        
    }
};
</script>
<style>
.box { height:198px; margin:30px 26px 12.5px 26px; background:url("../../assets/images/model-bg.png") 0 bottom repeat-x; border:1px solid #81410a }
.model-title { margin:0; line-height:36px; color:#d6d3d1}

.horn{
	background-image: url('../../assets/images/horn.png');
	display: inline-block;
	width: 16px;
	height: 16px;
    position: absolute;
    background-repeat: no-repeat;
}
.hornLeftTop {
	top: -1px;
	left: -1px;
}
.hornleftBottom {
	left: -1px;
	bottom:-1px;
	-moz-transform:rotate(270deg);  
	-webkit-transform:rotate(270deg);
	transform:rotate(270deg);
	filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3)
}
.hornRightTop {
	right: -1px;
	top: -1px;

	-moz-transform:rotate(90deg);  
	-webkit-transform:rotate(90deg);
	transform:rotate(90deg);
	filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)
}
.hornRightBottom {
	right: -1px;
	bottom:-1px;

	-moz-transform:rotate(180deg);  
	-webkit-transform:rotate(180deg);
	transform:rotate(180deg);
	filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=4)
}
</style>
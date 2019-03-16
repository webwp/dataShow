<template>
<div style="position: relative;">
    <div class='box mapGrap' style="width:180px;height:130px;position: absolute; left:-10px;bottom:-10px;z-index:1; color:#d2d1d0">
        <!-- 四角 -->
        <span class='horn hornLeftTop'></span>
        <span class='horn hornleftBottom'></span>
        <span class='horn hornRightTop'></span>
        <span class='horn hornRightBottom'></span>
        <h4 class="model-title bgs-icon">广西</h4>
        <hr class="rightLine" />
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">金粉店</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor">{{gx.vehicleRepairPlantCount}}</span>  家</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">车主</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-o">{{gx.carOwnerCount}}</span>  位</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">机动车</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-p">{{gx.vehicleCount}}</span>  辆</el-col>
        </el-row>
    </div>

    <div class='box mapGrap' style="width:180px;height:130px;position: absolute; right:-20px;top:40px;z-index:1;color:#d2d1d0">
        <!-- 四角 -->
        <span class='horn hornLeftTop'></span>
        <span class='horn hornleftBottom'></span>
        <span class='horn hornRightTop'></span>
        <span class='horn hornRightBottom'></span>
        <h4 class="model-title bgs-icon">北京</h4>
        <hr class="leftLine" />
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">金粉店</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor">{{bj.vehicleRepairPlantCount}}</span>  家</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">车主</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-o">{{bj.carOwnerCount}}</span>  位</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">机动车</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-p">{{bj.vehicleCount}}</span>  辆</el-col>
        </el-row>
    </div>

    <div v-show="isShow" class='box mapGrap' style="width:180px;height:130px;position: absolute; right:30px;top:210px;z-index:1;color:#d2d1d0">
        <!-- 四角 -->
        <span class='horn hornLeftTop'></span>
        <span class='horn hornleftBottom'></span>
        <span class='horn hornRightTop'></span>
        <span class='horn hornRightBottom'></span>
        <h4 class="model-title bgs-icon">{{User.city}}</h4>
        <hr class="leftLine" />
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">金粉店</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor">{{choiseCity.vehicleRepairPlantCount}}</span>  家</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">车主</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-o">{{choiseCity.carOwnerCount}}</span>  位</el-col>
        </el-row>
        <el-row>
            <el-col :span="12" class="padd-l textAlgin-l">机动车</el-col>
            <el-col :span="12" class="padd-r textAlgin-r"><span class="listTextColor-p">{{choiseCity.vehicleCount}}</span>  辆</el-col>
        </el-row>
    </div>

    <div class="mapBox" ref="mapBox">

    </div>
</div>
</template>
<script>

import echarts from 'echarts'
import 'echarts/map/js/china.js';
import { mapState } from "vuex"
export default {
    name:"MapData",
    data(){
        return {
            gx:{},
            bj:{},
            choiseCity:{},
            isShow:false,
            dataMap : [{ name: '北京' }, { name: '天津' }, { name: '上海' }, { name: '重庆' }, { name: '河北' }, { name: '河南' }, { name: '云南' }, { name: '辽宁' }, { name: '黑龙江' }, { name: '湖南' }, { name: '安徽' }, { name: '山东' },
            { name: '新疆' }, { name: '江苏' }, { name: '浙江' }, { name: '江西' }, { name: '湖北' }, { name: '广西' }, { name: '甘肃' }, { name: '山西' }, { name: '内蒙古' }, { name: '陕西' }, { name: '吉林' }, { name: '福建' }, { name: '贵州' },
            { name: '广东' }, { name: '青海' }, { name: '西藏' }, { name: '四川' }, { name: '宁夏' }, { name: '海南' }, { name: '台湾' }, { name: '香港' }, { name: '澳门' }],
            optionMap : {  
                backgroundColor: '',  
                title: {  
                    text: '',  
                    subtext: '',  
                    x:'center'  
                },  
                tooltip : {  
                    show:true,
                    textStyle: { color: "#fff" }, //提示标签字体颜色
                    trigger: 'item',
                    formatter: function (params) { 
                        
                        var res=``;
                        return res;
                    }
                },
                // toolbox: {
                //     show: true,
                //     orient: 'vertical',
                //     left: 'right',
                //     top: 'center',
                //     feature: {
                    
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '30%',
                    bottom: '10%',
                    top:'20%',
                    containLabel: true
                },
                geo: {
                    map: 'china',
                    type:'pie',
                    roam: false,
                    zoom: 1.2,
                    left:'10%',
                    label: { 
                        color: '#fffff',
                        textStyle:{
                            color: '#fffff',
                        }
                    },
                    labelLine:{
                        normal: {
                            lineStyle: {
                                color: '#fff'
                            },
                            show:true,
                            smooth: 0.2,
                            length: 120,
                            length2: 120
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fffff',
                            areaColor: '#664c2a',
                            borderColor: '#735835',
                            borderWidth:1
                        },
                        emphasis: {
                            areaColor: '#5a3f1c',
                        }
                    }
                }, 
                
                //左侧小导航图标
                // visualMap: {  
                //     show : true,  
                //     x: 'left',  
                //     y: 'center',  
                //     splitList: [   
                //         {start: 500, end:600},{start: 400, end: 500},  
                //         {start: 300, end: 400},{start: 200, end: 300},  
                //         {start: 100, end: 200},{start: 0, end: 100},  
                //     ],  
                //     color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                // },  
                
                //配置属性
                series: [{
                    name: '',  
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    
                        // type: 'map',
                        // map: 'china',
                    selectedMode: 'multiple',
                    itemStyle: {
                        normal: {
                            color: '#ec6c00',
                            shadowBlur: 10,
                            shadowColor: '#5a3f1c'
                        }
                    },
                    textStyle:{
                        normal:{
                            color: '#fffff',
                        }
                    }, 
                    label: {
                        color: '#fffff',
                        normal: {  
                            //show: true  //省份名称  
                            
                        },
                        textStyle:{
                            color: '#fffff',
                        }, 
                        emphasis: {
                                //show: true,//对应的鼠标悬浮效果
                                // textStyle:{color:"#800080"}
                            }
                    },  
                    data:this.dataMap,  //数据
                    
                }]  
            },
            mapEcharts:''
        }
        
    },
    computed:{
        ...mapState({
            userInfo(state){
                return state.User.user
            },
            User(state){
                return state.User
            }
        })
    },
    watch:{
        userInfo:{
            handler(cur,old){
                this.gx = this.getUserInfo(config.mapDefault[0],cur);
                this.bj = this.getUserInfo(config.mapDefault[1],cur);
                this.choiseCity = this.getUserInfo(this.User.city,this.cur); 
            },
            deep:true
        },
        User:{
            handler(cur,old){
                if(cur.city=="") return
                // this.User.city = cur.city
                // if(this.User.city!=config.mapDefault[0] && this.User.city != config.mapDefault[1]){
                //     this.isShow = true
                //     this.choiseCity = this.getUserInfo(cur.city,this.userInfo); 
                //     if(config.defaultCity) {
                //         this.User.city = config.defaultCity
                //         this.isShow = true
                //     }
                // }else{
                //     this.isShow = false
                // }
                var city = cur.city
                if(city!=config.mapDefault[0] && city != config.mapDefault[1]){
                    this.isShow = true
                    this.choiseCity = this.getUserInfo(cur.city,this.userInfo); 
                    if(config.defaultCity) {
                        city = config.defaultCity
                        this.isShow = true
                    }
                }else{
                    this.isShow = false
                }
            },
            deep:true
        }
    },
    methods:{
        randomData() {  
            return Math.round(Math.random()*500);  
        },
        setMapEcharts(){
            const mydata=[  
                {name: '北京',value: '100' },{name: '天津',value: this.randomData() },  
                {name: '上海',value: this.randomData() },{name: '重庆',value:this.randomData() },  
                {name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },  
                {name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },  
                {name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },  
                {name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },  
                {name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },  
                {name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },  
                {name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },  
                {name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },  
                {name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },  
                {name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },  
                {name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },  
                {name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },  
                {name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },  
                {name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },  
                {name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }  
            ];
            const mData = [

                {name: '贵港', value: [109.636131,23.178951]},
                {name: '柳州', value: [109.415363,24.397904]},
                {name: '南宁', value: [108.375916,22.838322]},
                {name: '北京', value: [116.37874,39.965208]},
            ]
            this.optionMap.series[0].data=mData;
            this.mapEcharts = this.$echarts.init(this.$refs.mapBox);
            this.mapEcharts.setOption(this.optionMap)
            // this.mapEcharts.addEventListener("mouseover", function(parame){
            //     console.log(parame)
            // })
        },
        randomData() {  
            return Math.round(Math.random()*500);  
        },
        getUserInfo(area,data){
            var res = "";
            if(data){
                Object.keys(data).forEach(function(v,i){
                    if(v == area){
                       res = data[v];

                    }
                    //console.log("------------+++",data[v].city)
                    if(data[v].city){
                         data[v].city.forEach(function(val,index){
                              if(val.cityName == area){
                                  res = val

                              }
                          })
                       }
                })
            }
            return res;
        }, 
    },

    mounted(){

        this.setMapEcharts();
        let t = this;
        
        this.gx = this.getUserInfo(config.mapDefault[0],t.userInfo);
        this.bj = this.getUserInfo(config.mapDefault[1],t.userInfo);
         
        if(this.User.city!=config.mapDefault[0] && this.User.city != config.mapDefault[1] && this.User.city !=""){
            this.isShow = true   
            this.choiseCity = this.getUserInfo(this.User.city,t.userInfo);
            
        }else{
            this.isShow = false
            if(config.defaultCity) {
                this.User.city = config.defaultCity
                this.isShow = true
            }
        }


        
    }
};
</script>
<style>
.mapBox {height:385px}
.bgs-icon { background:url("../../../assets/images/icon-orange.png") 0 center no-repeat; padding-left:25px;margin:0 10px; text-align:left}
.listTextColor-o { color:#11d8db}
.listTextColor-p { color:#e9c914}
.padd-l {padding-left:10px}
.padd-r {padding-right:10px}
.mapGrap .el-row {
    line-height:28px
}
.mapGrap hr { position:absolute; border:none; border-top:1px solid #ec6c00}
hr.leftLine { top:70px;width:65px;left:-65px;}
hr.rightLine { top:60px;width:100px;left:180px;}
</style>


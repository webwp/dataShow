<template>
    <div class="header">
        <el-row :gutter="20">
            <el-col :span="8"><div class="header-text textAlign-left">{{dateTime}}</div></el-col>
            <el-col :span="8"><h1 class="title-text">金奔腾车联网云服务平台</h1></el-col>
            <el-col :span="8">
                <div class="header-text textAlign-right">
                    当前城市：
                    <el-select v-model="value" placeholder="请选择" @change="changeSelect">
                        <el-option
                        v-for="item in options" 
                        v-show="item.value != '广西'"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    name:"Headersfee",
    computed:{
        ...mapState({
            userInfo(state){
                return state.User.user
            }
        })
    },
    watch:{
        userInfo:{
            handler(cur,old){

                let t = this,arr=[]
                Object.keys(cur).forEach(function(v,i){
                    if(v != config.allDefault && v != "广西")
                    arr.push({value:v,label:v})
                    if(cur[v].city){
                        cur[v].city.forEach(function(val,index){
                            arr.push({
                                label:val.cityName,
                                value:val.cityName,
                            })
                        })
                    }
                })
                this.options = arr;
            },
            deep:true
        }
    },
    data(){
        return {
            options: [
                
            ],
            value: config.defaultCity,
            dateTime:""
        }
    },
    created(){
        
        /*时间*/
        let _t = this,dateTime='',Hours='',Minutes='',Seconds='';
        setInterval(function(){
            var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],getday="";
            dateTime = new Date();

            Hours = parseInt(dateTime.getHours())<10?'0'+dateTime.getHours():dateTime.getHours();
            Minutes = parseInt(dateTime.getMinutes())<10?'0'+dateTime.getMinutes():dateTime.getMinutes();
            Seconds = parseInt(dateTime.getSeconds())<10?'0'+dateTime.getSeconds():dateTime.getSeconds();
            getday = week[dateTime.getDay()];
            _t.dateTime = dateTime.getFullYear() +"年"+ (parseInt(dateTime.getMonth())+1) +"月"+ dateTime.getDate() +"日"+ "（"+getday+"）"+ Hours +"时"+ Minutes +"分"+ Seconds + "秒" ;
        },1000)
        /*时间*/
    },

    methods:{
        changeSelect(){
            this.$store.dispatch("setCity",this.value)
            
        }
    }
};
</script>

<style>
.header {
    position:absolute;
    top:0;
    left:0;
    height:72px;
    width:1280px;
    background:url('../../assets/images/title-bg.png') center 0 no-repeat;
    
}
.title-text {
    margin-top: 15px;
    color: #fff;
    font-weight: 500
}
.header-text {
    line-height:56px;
    color:#fff;
    padding:0 25px
}
.textAlign-left {
    text-align:left;
}
.textAlign-right {
    text-align:right;
}
.el-input__inner {
    border:none !important;
    background:none !important;
    width:100px !important;
    color:#fff !important;

}
.el-select-dropdown {
    border: 1px solid #febc3c;
    background-color: #000;
}
.el-popper[x-placement^=bottom] .popper__arrow {
    border-bottom-color: #febc3c;
}
.el-popper[x-placement^=bottom] .popper__arrow::after {
    border-bottom-color: #febc3c;
    top: 0px;
}
.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    background-color: #febc3c;
    
}
.el-select-dropdown__item.selected {
    color:#fff
}
</style>
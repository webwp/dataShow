<template>
    <div ref="lineCharts" class="lineCharts">
        
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    name:"LineChart",
    computed:{
        ...mapState({
            orderToday(state){
                return state.orderToday.orderToday
            }
        })
    },
    watch:{
        orderToday:{
            handler(cur,old){
                //const dataJson = this.getLineDataCh(this.getCountyData("全国",this.orderToday))
                if(this.count ==0){
                    const dataJson = this.getLineDataCh(this.getCountyData(config.lineEchartCity,this.orderToday))
                    if(this.lineCharts==""){
                       this.lineCharts = this.$echarts.init(this.$refs.lineCharts)
                       this.drawLine(this.option)
                    }
                    var ks = this.lineCharts.getOption('option');

                        ks.series[0].data = dataJson.orderCount;

                        ks.series[1].data = dataJson.goldPowderOrderCount;

                        ks.series[2].data = dataJson.dealCount;

                        ks.series[3].data = this.setAx();

                        this.lineCharts.setOption(ks, true);
                      
                        this.count+=1;

                }else{

                    this.count = this.count > config.setNumber ? 0:this.count+1;
                }

            },
            deep:true
        }
    },
    data(){
        return {
            count:0,
            option:{
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    // formatter: function(params) {
                    //     params = params[0];
                    //     var date = new Date(params.name);
                    //     console.log("---------------------------",params)
                    //     // return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' : ' + params.value[1];
                    //     return date.getHours()+"时"+date.getMinutes()+"分";
                    // },
                    // axisPointer: {
                    //     animation: false
                    // }
                },
                legend: {
                    data:['车主发起的汽修竞价','"金粉店"在线抢单量','车主确认的成交订单'],
                    orient: 'vertical',
                    y : 'center',
                    right: '15px',
                    textStyle:{color:"#fff"},
                    itemHeight:14,
                    itemWidth:14,
                    itemGap:24,
                    icon: "rect",
                    textStyle:{
                        color:'#d6d3d1',
                        fontSize:14
                    }
                },
                color:["#01f3fe","#ec6c00","#fff100"],
    // dataZoom: [
    //     {
    //         show: true,
    //         realtime: true,
    //         start: 65,
    //         end: 85
    //     },
    //     {
    //         type: 'inside',
    //         realtime: true,
    //         start: 65,
    //         end: 85
    //     }
    // ],
                xAxis: {
                    type: 'time',
                    //data: this.mm(),
                    //maxInterval:10,
                    //splitNumber: 2,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        //X轴刻度配置
                        interval: "auto", //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                        color:"#fff"
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:"#532e0e"
                        }
                    },
                    // data:this.setxAxis(),
                    boundaryGap: false,
                    
                    axisLine:{
                        lineStyle:{
                            color:"#ec6c00"
                        }
                        
                    },
                },
                grid: {
                    left: '3%',
                    right: '30%',
                    bottom: '10%',
                    top:'20%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color:"#532e0e"
                        }
                    },
                    axisLabel: {
                        formatter: '{value}'
                    },
                    axisPointer: {
                        snap: true
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#ec6c00'
                        }
                    },
                    axisLabel:{
                        color:"#fff"
                    }
                },
                series: [{
                    name: '车主发起的汽修竞价',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    hoverAnimation: false,
                    data: []
                },
                {
                    name: '"金粉店"在线抢单量',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    hoverAnimation: false,
                    data: []
                },
                {
                    name: '车主确认的成交订单',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    hoverAnimation: false,
                    data: []
                },
                {
                    name: '.anchor',
                    type: 'line',
                    show:false,
                    showSymbol: false,
                    smooth: true,
                    data: this.setAx(),
                    tooltip:{
                        show:false
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0
                        }
                    }
                }]
            },

            lineCharts:"",

            dataJson : {
                data0: [],
                data2: [],
                data3: [],
                anchor: []
            },

            dataJson2 : {
                dateToday:"",
                goldPowderOrderCount: [],
                orderCount: [],
                dealCount: [],
                anchor: []
            },

            earliestTime:" 8:0:0"
        }
    }, //data()
    created(){
        
    },
    mounted(){


        this.lineCharts = this.$echarts.init(this.$refs.lineCharts)
        this.lineCharts.setOption(this.option, true);

        let t = this;

    },
    methods:{
        setAx(){
            var k = new Date(),arr=[];
            for (var i = k.getHours() -2>=0?k.getHours() :k.getHours()+1; i <= k.getHours() + 1; i++) {
                //if(i>=11){
                var time1 = k.getFullYear() + "/" + (k.getMonth() + 1) + "/" + k.getDate() + " " + i + ":00:00"
                arr.push({
                    name: new Date(),
                    value: [time1, 0]
                })
                //}
            }

            return arr
        },
        drawLine(data){
            this.lineCharts = this.$echarts.init(this.$refs.lineCharts);

            if (this.option && typeof this.option === "object") {
                // this.option.series[0].data = data.orderCount;

                // this.option.series[1].data = data.goldPowderOrderCount;

                // this.option.series[2].data = data.dealCount;
                this.lineCharts.setOption(this.option, true);
            }
        },

        setxAxis(){
            var getTime = new Date(),getHours = getTime.getHours() + 1,arr=[];
            
            for (var i = getHours-8>0?getHours-8:0; i <= getHours; i++) {

                var time1 = getTime.getFullYear() + "/" + (getTime.getMonth() + 1) + "/" + getTime.getDate() + " " + i + ":00:00",
                    time2 = i + "时"
                arr.push({
                    name: new Date(),
                    value: [time2, 0]
                })
            }
            return arr;
        },

        getCountyData(city,data){
            var res = {};
            Object.keys(data).forEach(function(v,i){
                if(v == city){
                    res = data[v];
                }
            })
            return res;
        },

        setArrS(a,b,c){
                var arr = [],num=1,inits=0;
                var m = new Date(),
                    g = m.getFullYear()+"-" +(m.getMonth()+1)+"-"+m.getDate()+ this.earliestTime,
                    f = m.getFullYear()+"-" +(m.getMonth()+1)+"-"+m.getDate()+" "+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds();
                var t = Date.parse(new Date(g)),
                    e = Date.parse(new Date(f))-(a/2);
                do{
                    if(num==1){
                        inits=0
                    }else{
                        inits=1
                    }
                    //document.write(new Date(t)+"<br />")
                    arr.push({
                        name:new Date(t),
                        value:[new Date(t),parseInt(c*inits+10*num*Math.random())]
                    })
                    t+=a/2;
                    num+=2;

                }while(t<e)
                return arr;
        },

        

        getLineDataCh(data){
            const { brokenList } = data
            
            var dateTime = new Date(),
                dateTimeDay = dateTime.getDate();
            // if(localStorage.getItem("dataJson")){
            //     this.dataJson2 = JSON.parse(localStorage.getItem("dataJson"));

            //     if(this.dataJson2.dateToday != dateTimeDay){
            //         this.dataJson2 = {
            //             dateToday:dateTimeDay,
            //             goldPowderOrderCount: [],
            //             orderCount: [],
            //             dealCount: [],
            //             anchor: []
            //         }
            //         this.dataJson2.goldPowderOrderCount = this.setArrS(3600000,4,40).concat(this.dataJson2.goldPowderOrderCount);
            //         this.dataJson2.orderCount = this.setArrS(3600000,4,60).concat(this.dataJson2.orderCount);
            //         this.dataJson2.dealCount = this.setArrS(3600000,4,20).concat(this.dataJson2.dealCount);
            //         console.log("e ")
            //     }

            // }else{

                
            //     this.dataJson2.dateToday = dateTimeDay;
                
                
            //     this.dataJson2.goldPowderOrderCount = this.setArrS(3600000,1,40);
            //     this.dataJson2.orderCount = this.setArrS(3600000,1,60);
            //     this.dataJson2.dealCount = this.setArrS(3600000,1,20);
            // }
            this.dataJson2 = {
                dateToday:"",
                goldPowderOrderCount: [],
                orderCount: [],
                dealCount: [],
                anchor: []
            }
            var t = this;
            brokenList.forEach(function(v,i){

                var dealCount = v.dealCount,
                    goldPowderOrderCount = v.goldPowderOrderCount,
                    orderCount = v.orderCount

                t.dataJson2.dealCount.push({
                        name: new Date(v.orderTime.substring(0,v.orderTime.length-3)),
                        value: [new Date(v.orderTime.substring(0,v.orderTime.length-3)), v.dealCount]
                })

                t.dataJson2.goldPowderOrderCount.push({
                        name: new Date(v.orderTime.substring(0,v.orderTime.length-3)),
                        value: [new Date(v.orderTime.substring(0,v.orderTime.length-3)), v.goldPowderOrderCount]
                })
                t.dataJson2.orderCount.push({
                        name: new Date(v.orderTime.substring(0,v.orderTime.length-3)),
                        value: [new Date(v.orderTime.substring(0,v.orderTime.length-3)), v.orderCount]
                })

            })
        
            
            //console.log("好奇：",this.dataJson2)
            //localStorage.setItem("dataJson",JSON.stringify(this.dataJson2));

            return this.dataJson2;
        }
    }
};
</script>
<style>
.lineCharts { height:155px}
</style>
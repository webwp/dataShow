<template>
    <div ref="barOne" style="height:100px">

    </div>
</template>
<script>
import echarts from "Echarts"
export default {
    name:"BarCharts",
    props:["d"],
    data(){
        return {
            option:{
                title : {
                    // text: '某地区蒸发量和降水量',
                    // subtext: '纯属虚构'
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    bottom: '10%',
                    top:'10%',
                    containLabel: true
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:[this.d.title],
                    x: 'right',               // 水平安放位置，默认为全图居中，可选为：
                                            // 'center' ¦ 'left' ¦ 'right'
                                            // ¦ {number}（x坐标，单位px）
                    y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                    top:0,
                    itemWidth: 12,             // 图例图形宽度
                    itemHeight: 12,            // 图例图形高度
                    textStyle: {
                        color: 'rgb(255, 255, 255)',          // 图例文字颜色
                        
                    }
                },
                toolbox: {
                    show : true,
                    feature : {
                        // dataView : {show: true, readOnly: false},
                        // magicType : {show: true, type: ['line', 'bar']},
                        // restore : {show: true},
                        // saveAsImage : {show: true}
                    }
                },
                
                //calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        data : this.setXdata(this.d),
                        splitLine:{
                            show:false    //清理网格线
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ec6c00"
                            },                           
                        },
                        axisLabel:{
                            interval:0,
                            color:"#fff",
                            fontSize:"12"
                        }
                    },
                    
                    
                ],
                yAxis : [
                    {
                        type : 'value',
                        splitLine:{
                            show:false
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ec6c00"
                            },                           
                        },
                        axisLabel:{
                            color:"#fff",
                            fontSize:"12"
                        }
                    }
                ],
                series : [
                    {
                        name:this.d.title,
                        type:'bar',
                        data:this.setData(this.d),
                        barWidth : 15,
                        itemStyle:{
                            normal:{
                                color:new echarts.graphic.LinearGradient(
                                    0,0,0,1,
                                    [
                                    {offset:0,color:"#F84036"},
                                    {offset:1,color:"#F9BC2E"}
                                    ]
                                )
                            }
                        }
                        
                    }
                ]
            },
            BarOne:"",
            BarTwo:""
        }
    },
    methods:{
        setBarCharts(ref,option){
           ref.setOption(option);
        },
        setXdata(a){
            var res = [];
            if(a.data.length>0){
                a.data.forEach(function(v,i){
                    res.push(v[a.type])
                })
            }

            return res;
        },
        setData(a){
            var res = [];
            if(a.data.length>0){
                a.data.forEach(function(v,i){
                    if(v['faultCount']){
                        res.push(v["faultCount"])
                    }else{
                        res.push(v["fault"])
                    }
                    
                })
            }
            
            return res;
        }

    },

    watch:{
        d:{
            handler(cur,old){
                this.d = cur;
                var opt = this.BarOne.getOption('option');
                opt.xAxis[0].data = this.setXdata(cur)
                opt.series[0].data = this.setData(cur)
                this.BarOne.setOption(opt);

            }
        }
    },

    mounted(){

        this.BarOne = this.$echarts.init(this.$refs.barOne);
        this.setBarCharts(this.BarOne,this.option)

    }
}
</script>
<style>

</style>
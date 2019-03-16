<template>
    <div class="wrapper">
        <Header />
        <div class="wrapper-left">
            <div class="wrapper-right">
                <TodayIndex />

                <Content />

                <Footer />
            </div> 
        </div>
        <div class="bottom-s">
            
        </div>
    </div>
</template>

<script>
    import Header from './header/index.vue'
    import TodayIndex from './today/index.vue'
    import Content from './content/index.vue'
    import Footer from './footer/index'
    import axios from 'axios'
    export default {
        name:'Index',
        components:{
           "Header":Header,
           "TodayIndex":TodayIndex,
           "Content":Content,
           "Footer":Footer
        },
        data(){
            return {

            }
        },
        created(){
            
        },
        mounted(){

            // this.$store.dispatch("getUserInfo")
            // this.$store.dispatch("getReport")
            // this.$store.dispatch("getOrderToday")
            // this.$store.dispatch("getOrder")
            

            
            // let t=this;
            // if(config.isSetInterval){
            //     setInterval(function(){
            //         t.$store.dispatch("getUserInfo")
            //     },config.setIntervalUser)
            //     setInterval(function(){
            //         t.$store.dispatch("getReport")
            //     },config.setIntervalReport)
            //     setInterval(function(){
            //         t.$store.dispatch("getOrderToday")
            //     },config.setIntervalOrderToday)
            //     setInterval(function(){
            //         t.$store.dispatch("getOrder")
            //     },config.setIntervalOrder)
            // }
        }
    };
</script>
<style>
.wrapper { 
    width:1280px; 
    height:960px; 
    background:url('../assets/images/bg-T.jpg') center center no-repeat;
    margin: 0 auto; 
    position:relative;
    overflow: hidden;
    border-bottom:1px solid #febc3c;
}
.wrapper-left { margin-top:48px;background:url("../assets/images/left-bg.png") center left no-repeat; height:912px;}
.wrapper-right {background:url("../assets/images/right-bg.png") center right no-repeat; height:912px;display: block;overflow: hidden;}
.bottom-s { background:url("../assets/images/bottom-bg.png") 0 0 repeat-x; height:5px; position:absolute; width:100%; bottom:0 }
</style>
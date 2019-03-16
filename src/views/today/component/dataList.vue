<template>
    <div class="xxm">
        <div class='numbers-set'>
			<div ref="dynamicNum"> 
			    <div class="boxNum"> 
				    <span>0</span> 
				    <span>1</span> 
				    <span>2</span> 
				    <span>3</span> 
				    <span>4</span> 
				    <span>5</span> 
				    <span>6</span> 
				    <span>7</span> 
				    <span>8</span> 
				    <span>9</span> 
			    </div> 
			</div>
		</div>
    </div>
</template>
<script>
export default {
    name:"DataList",
    props:["num","numberNg"],
    watch:{
        num:{
            handler(cur,old){
                
                if(cur.numberNg){
                    this.renderFun(cur.numberNg)
                    this.num = cur
                }
            },
            deep:true
        }
    },
    data(){
        return {

        }
    },
    methods:{
        onClickChangePosition(a, v, id, boxNum) {
            var obj = id,
            box = obj.getElementsByClassName(boxNum),
            cliBox = box[a].clientHeight ,
            getSpan = box[a].getElementsByTagName('span'),
            sd = v,
            res = cliBox * (this.m(v, getSpan)),
            childfirst = '',
            num = sd - 1 < 0 ? 0 : sd - 1,
            currAct = '';
            if (res == 0) {
                if (box[a].querySelector('.act')) {

                    var mb = cliBox * (parseInt(box[a].querySelector('.act').innerHTML) + 1);
                    box[a].querySelector('.act').style.webkitTransform = 'translate3d(0,-' + mb + 'px,0)'
                }
                getSpan[0].style.webkitTransform = 'translate3d(0,-' + 0 + 'px,0)';
                getSpan[0].style.transform = 'translate3d(0,-' + 0 + 'px,0)';
                getSpan[0].style.opacity = 1;
            } else {
                for (var i = 0; i < 10; i++) {
                    if(i<=sd){
                        if (box[a].querySelector('.act')) {
                            var mb = cliBox * (parseInt(box[a].querySelector('.act').innerHTML) + 1);
                            box[a].querySelector('.act').style.webkitTransform = 'translate3d(0,-' + mb + 'px,0)';
                        }
                        getSpan[i].className = '';

                        getSpan[i].style.opacity = 1;
                        getSpan[i].style.webkitTransform = 'translate3d(0,-' + res + 'px,0)';
                        getSpan[i].style.transform = 'translate3d(0,-' + res + 'px,0)';
                        if (i == sd) {
                            getSpan[i].className = 'act';
                            currAct = getSpan[i];
                        } else {
                            
                            getSpan[i].style.opacity = 0;
                        }
                    }else{
                        getSpan[i].className = '';
                    }
                    getSpan[i].style.opacity = getSpan[i].className == "" ?  0 : 1
                }
                setTimeout(function() {
                    for (var i = 0; i < getSpan.length; i++) {
                        if (getSpan[i].className != 'act') {
                            getSpan[i].style.webkitTransform = 'translate3d(0,' + cliBox + 'px,0)';
                            getSpan[i].style.transform = 'translate3d(0,' + cliBox + 'px,0)';
                        }
                    }
                },
                600)
            }
        },
        m(a, b) {
            var res = 0;
            for (var i = 0; i < b.length; i++) {
                if (parseInt(a) == parseInt(b[i].innerHTML)) {
                    res = i;
                }
            }
            return res;
        },
        onClicks(data) {
            var v = data,_t=this,
            arr = v.split(''),
            _id = this.$refs.dynamicNum,
            cbox = '',
            boxNum = 'boxNum';
            if (_id.getElementsByClassName('boxNum').length != arr.length) {
                for (var i = 0; i < arr.length - 1; i++) {
                    cbox = _id.querySelector('.boxNum').cloneNode(true);
                    _id.appendChild(cbox);
                }
            }
            arr.forEach(function(v, i) {
                _t.onClickChangePosition(i, v , _id, boxNum)
            })
        },
        renderFun(data){
            var sd = this.num.num - (data.toString().length),priceString='';
            for(var i=0;i<sd;i++){
                priceString += "0";
            }
            priceString = priceString+data;
            this.onClicks(priceString);
        }
    },
    mounted(){
        
        var _t = this,price=0,xl="";
        if(this.num.num){
            for(var i=0;i<this.num.num;i++){
                xl+="0";
            }
        }
        this.onClicks(xl)
        // setInterval(function(){
        //     price+=1;
        //     _t.renderFun(price);
        // },3000)
    }
};
</script>
<style>
.numbers-set { padding-left:14px;line-height: 50px; color:#fff; }
.boxNum {overflow:hidden;width:34px; height:36px; float:left; }
.boxNum span { 
    background-image:url('../../../assets/images/gird.png');
    background-size:90%;
    background-repeat:no-repeat;
    background-position:center center;
    transition:all 0.5s; 
    height:34px; 
    margin:2px ;
    display:block;
    line-height:34px;
    text-align:center;
    font-size: 28px;
    color:#fff;
    }
.xxm {
    line-height: 42px;
    display: initial;
}
</style>

<template>
    <div class="fixed_bg">
       <div class="loading_box">
           <img src="@/assets/img/loading.gif" alt="">
            <p>加载中...</p>
       </div>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
@import "../../assets/css/index.less";
.loading_box{
    position: absolute;
    width:200px;
    height: 200px;
    margin-left:-100px;
    margin-top:-100px;
    left:50%;
    top:50%;
    text-align: center;
    img{
        margin-top:60px;
    }
    p{
        line-height: 24px;
        color: #333;
        padding:10px 0;
        font-size:16px;
    }
}
</style>
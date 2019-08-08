<template>
<div>
  <div class="home-page">
    <div class="home-top"></div>
    <div class="home-header">
      <div class="home-header-left">
        <div class="header-title">尊艺造型</div>
        <div class="header-info">
          <div class="phone">
            <i class="icon-icon-phone"></i>
            <span>028-587777511</span>
          </div>
          <div class="position">
            <i class="icon-icon-positioning"></i>
            <span>成都市温江区行署路76号</span>
          </div>
        </div>
      </div>
      <div class="home-header-right">
        <span class="right-phone"><i class="icon-icon-phone"></i></span>
      </div>
    </div>
    <div class="home-content">
      <div class="content-item">
        
      </div>
    </div>
  </div>
  <router-view></router-view>  
</div>
  
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      message: '你好'
    }
  }
}
</script>
<style lang="scss" scoped>
  $topImage: "../images/EG-025221-4_large.webp";
  $primary: rgb(186,128,76);
  
  .home-page {
    width: 100%;
    position: relative;
    
    .home-top {
      height: 6.5rem;
      background-image: url($topImage);
      background-size: cover;
      background-position: center;
      border-radius: 0 0 .6rem .6rem;
      margin-bottom: 4.775rem;
    }
    
    .home-header {
      width: 16.75rem;
      height: 5.95rem;
      box-sizing: border-box;
      padding: 1rem 0 1.2rem;
      background-color: #fff;
      position: absolute;
      top: 3.525rem;
      left: 50%;
      transform: translateX(-50%);
      margin: 0 auto;
      border-radius: .6rem;
      display: flex;
      justify-content: space-between;
    }
    
    .home-header-left {
      padding: 0 .8rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .header-info {
        display: flex;
        padding-top: .4rem;
        justify-content: space-between;
        
        .phone {
          margin-right: .8rem;
        }
        
        >div {
          font-size: .6rem;
          color: #c3c3c3;
          display: flex;
          flex-direction: column;
          
          i {
            margin-bottom: .2rem;
          }
        }
      }
    }
    
    .home-header-right {
      padding: 0 .8rem;
      border-left: 1px solid #f3f3f3;
      
      .right-phone {
        display: inline-block;
        width: 1.3rem;
        height: 1.3rem;
        text-align: center;
        background-color: $primary;
        border-radius: 50%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
                
        i {
          color: #fff;
          font-size: .6rem;
        }
      }
    }
    
  } 
</style>

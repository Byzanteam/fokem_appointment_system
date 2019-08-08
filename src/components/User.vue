<template>
  <div class="fokem-home">
    <div class="fokem-home-container">
      <div class="user-avatar" :style="userInfo.style">
      </div>
      <div class="user-info">
        <span class="name">{{this.userInfo.name}}</span>
        <span class="score">
          <span>综合评分：</span>
          <i class="icon-icon-star"></i>
          <i class="icon-icon-star"></i>
          <i class="icon-icon-star"></i>
          <i class="icon-icon-star"></i>
          <i class="icon-icon-star"></i>
        </span>
      </div>
      <p class="router-list">
        <a class="router">
          <i class="icon-icon-reservation"></i>
          <span>我的预约</span>
        </a>
        <a class="router">
          <i class="icon-icon-consumption"></i>
          <span>消费明细</span>
        </a>
        <a class="router">
          <i class="icon-icon-personal"></i>
          <span>个人资料</span>
        </a> 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userInfo: {
        style:{
          backgroundImage: "url(" + require('../images/pexels-photo-1672904.jpeg') + ")"
        },
        name: '王毅'
        
      }
    }
  },
  computed: {
    
  },
  methods: {
    getUserInfo: function() {
      
    }
  }
}
</script>
<style lang="scss" scoped>
  $gold-background: '../images/photo-1536520002442-39764a41e987.jpeg';
  $primary: rgba(186,128,76, .5);
  
  .fokem-home {
    height: 100%;
    width: 100%;
    background-image: url($gold-background);
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    
  }

  .fokem-home-container {
    background-color: $primary;
    position: relative;
    top: 50%;
    transform: translateY(-60%);
    padding: 1.8rem 1.75rem;
    
  }
  
  .user-avatar {
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: top right;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0 auto 1rem;
  }
  
  .user-info {
    color: #fff;
    text-align: center;
    
    .name {
      text-align: center;
      font-weight: bold;
    }
    
    .score {
      font-size: .6rem;
      
      i {
        color: rgb(186,128,76);
      }
    }
  }
  
  .router-list {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 2.2rem;
    
    .router {
      display: flex;
      flex-direction: column;
      text-align: center;
      
      i {
        font-size: 1.2rem; 
      }
      
      span {
        font-size: 14px;
        line-height: 1.5;
        margin-top: .6rem;
      }
    }
  }
</style>

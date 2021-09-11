<template>
  <div id="userLayout" class='user-layout-wrapper'>
    <div class="wrapper">
      <div class="logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      <div class="container">
        <Login />
      </div>
      <div class="login-footer">
        Copyright ©2021 华信永道（北京）科技有限公司
      </div>
    </div>
  </div>
</template>

<script>

import Login  from './login.vue';

export default {
  name: 'UserLayout',
  components: {Login},
  data () {
    return {
    }
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="scss">
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }
  .wrapper {
    height: 100%;
    min-width: 1366px;
    .logo {
      height: 120px;
      img {
        position: relative;
        top: 50%;
        left: 47px;
        height: 47.5%;
        transform: translateY(-50%);
      }
    }
  }
  .container {
    position: relative;
    width: 100%;
    min-height: 495px;
    height: calc((100vh - 120px) * 0.87655);
    background: #f0f2f5 url('/login_bg.jpg') no-repeat top center;
    background-size: cover;

    .main {
      position: absolute;
      top: 50%;
      right: 180px;
      transform: translateY(-50%);
      width: 521px;
      box-sizing: border-box;
      border-radius: 5px;
      overflow: hidden;
    }
  }
  .login-footer {
    height: calc((100vh - 120px) * 0.12345);
    line-height: calc(100vh * 0.104);
    text-align: center;
    white-space: nowrap;
  }
}
</style>
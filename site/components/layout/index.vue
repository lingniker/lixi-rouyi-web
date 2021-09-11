<template>
  <div class="lx-layout">
    <Header/>
    <slot/>
    <div className="lx-layout-footer">
      Copyright © 2021-2021 lingyuanping. All Rights Reserved.
      备案号: <a href="http://www.beian.miit.gov.cn" target="__blank">桂ICP备17010627号-1</a>
    </div>
  </div>
</template>

<script>
  import Header from './header.vue';
  import './index.scss';
  export default {
    components: {
      Header
    }
  }
</script>>
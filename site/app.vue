<template>
    <router-view></router-view>
</template>

<script>
import test from './test.jsx';
import TestX from './test.tsx';

// import Layout from './components/layout/index.vue'
// import { use } from '../src/i18n/index';

export default {
  components: {
    Test: test,
    TestX
  },
  data() {
    return {
      name : "ling"
    }
  },
  created() {
    function setLang(){
      var lang = window.localStorage.getItem("lv_lang");
      // if (lang) {
      //   use(lang);
      // } else {
      //   use("zh");
      // }
    }

    setLang()
  }
}
</script>
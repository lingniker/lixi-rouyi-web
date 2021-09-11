<template>
  <div>
    {{ pageName }}
    <Md v-if="lang === 'zh'"/>
    <MdEs v-if="lang === 'es'"/>
  </div>
</template>

<script>
  import Md from './index.md'
  import MdEs from './index-es.md'
  import MdZh from './index-zh.md'

  export default {
    name : 'ButtonMd',
    components: {
      Md,
      MdEs,
      MdZh
    },
    data () {
      return {
        pageName: 'button - doc',
        lang: 'zh'
      }
    },
    created() {
      var lang = window.localStorage.getItem('lv_lang')
      if (lang) {
        this.lang = lang
      } else {
        this.lang = 'zh'
      }
    }
  }
</script>

<style>
 .lv-button{
   margin-right: 5px;
 }
 .block{
   margin: 10px;
 }
</style>

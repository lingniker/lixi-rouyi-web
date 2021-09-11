<template>
  <div class="lx-layout-header">
      <div class="lx-logo">Lixi</div>
      <div class="lx-layout-menu">
        <ul class="lx-menu-ul">
          <li class="lx-menu-li">
            <router-link to="/home" class="menu-item" activeClass='active-menu'>home</router-link>
          </li>
          <li class="lx-menu-li">
            <router-link to="/doc" activeClass='active-menu'>doc</router-link>
          </li>
          <li class="lx-menu-li">
            <router-link to="/material" activeClass='active-menu'>material</router-link>
          </li>
          <li class="lx-menu-li">
            <select id="item" :value="lang" @change="changeLang">
              <option value="zh">zh</option>
              <option value="es">es</option>
            </select>
          </li>
          <!-- {/* <li class="lx-menu-li">
            <select id="item" onChange={(e)=>sclick(e)}>
              <option value="v4">v4</option>
              <option value="v3">v3</option>
            </select>
          </li> */} -->
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        lang: 'zh'
      }
    },
    created () {
      var lvLang = window.localStorage.getItem("lv_lang")
      console.log('lvLang-------------------------', lvLang)
      if (lvLang) {
        this.lang = lvLang
      } else {
        this.lang = 'zh'
      }
    },
    methods: {
      changeLang (e) {
        this.lang = e.target.value
        window.localStorage.setItem("lv_lang", e.target.value)
        window.location.reload()
      }
    }
  }
</script>

<style scoped>
  .header{
    background: #ddd;
  }
</style>

<template>
  <div class="material div page-container">
    <div class="material-left" >
      <div class="logo" >
      </div>
      <ul>
        <li class="doc-li" v-for="(item,index) in materialList" :key="index">
            <router-link :to="item.path" activeClass='active-menu'>{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class = "material-right div content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import "./index.scss";
  import MaterialConfig from "../../../material/index.js"
  // var MaterialConfig = []

  export default {
    name: 'Material',
    data () {
      return {
        materialList: MaterialConfig
      }
    }
  }
</script>
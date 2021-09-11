<template>
  <!-- <div class="doc">
    <div class="side">
      
    </div>
    <div class="content">
    </div>
  </div> -->
  <div class = "doc div page-container">
    <div class = "doc-left" >
      <div class = "logo" >
      </div> 
      <ul>
        <li class="doc-li" >
            <router-link to="/doc/button" activeClass='active-menu'>button</router-link>
            <!-- <NavLink to="/doc/introduce" activeClass='activeClass'> introduce 介绍 </NavLink>  -->
        </li> 
        <li class="doc-li" >
            <router-link to="/doc/tree" activeClass='active-menu'>tree</router-link>
        </li> 
        <li class="doc-li" >
            <!-- <NavLink to="/doc/input" activeClass='activeClass'> input 输入框 </NavLink> -->
        </li>
        <li class = "doc-li" >
            <!-- <NavLink to="/doc/tree" activeClass='activeClass'> tree 树型结构 </NavLink> -->
        </li>
      </ul> 
    </div> 
    <div class = "doc-right div content">
      <router-view></router-view>
    <!-- <Switch>
        <Route path = "/doc/introduce">
            <Introduce/>
        </Route>
        <Route path = "/doc/button" >
            <Button/>
        </Route> 
        <Route path = "/doc/input" >
            <Input/>
        </Route>
        <Route path = "/doc/tree" >
            <Tree/>
        </Route>
    </Switch>  -->
    </div> 
  </div>
</template>

<script>
import Md from './index.md';
import "./index.scss";
export default {
  components:{
    Md
  }
}
</script>
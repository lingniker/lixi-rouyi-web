<template>
  <div class="demo-block">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="expanded-wrap">
      <div v-if='isExpanded'>
        <slot/>
      </div>
      <div class="expanded-bottom">
        <div class="expanded-btn" @click="handleExpandFn">
          {{ isExpanded ? "收起" : "展开" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data(){
    return {
      isExpanded: false
    }
  },
  methods : {
    handleExpandFn() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>
<style lang="scss" scoped>
  .demo-block{
    .expanded-wrap{
      position: relative;
      padding: 8px 10px;
      border: 1px solid #fafafa;
      box-shadow: 0px 0px 8px #fafafa;
      &:hover{
        box-shadow: 0px 0px 8px #eee;
      }
      .expanded-bottom{
        width: 100%;
        height: 30px;
        background: lightcyan;
        line-height: 30px;
        text-align: center;
        .expanded-btn{
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }
</style>

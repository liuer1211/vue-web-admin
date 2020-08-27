<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain } from './components' // 默认找components下的index.js
  import ResizeMixin from './mixin/ResizeHandler'

  export default {
    name: 'layout',
    components: {
      Navbar,
      Sidebar,
      AppMain
    },
    mixins: [ResizeMixin], // 混合js,业务多则分离出来
    computed: {
      sidebar() {
        this.$store
        debugger
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix; /*@include 指令可用于包含一混入：*/
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>

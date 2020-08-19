<template>
  <scroll-bar>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :collapse="isCollapse"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    components: { SidebarItem,ScrollBar },
    data() {
      return {
        isCollapse: true
      }
    },
    computed: {
      ...mapGetters([
        'routers'
      ]),
      routes() {
        console.log('this.routers-',this.routers)
        return this.routers
      }
    }
  }
</script>

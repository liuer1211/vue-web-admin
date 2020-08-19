<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden && item.children">
      <!--菜单 可以点击-->
      <router-link :to="item.path+ '/' +item.children[0].path" :key="item.children[0].name">
        <el-menu-item>
          <!--<svg-icon></svg-icon>-->
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <!--菜单 不可以点击-->
      <!--<el-submenu>
        <template>
          &lt;!&ndash;<svg-icon></svg-icon>&ndash;&gt;
          &lt;!&ndash;<span slot="title">{{item.meta.title}}</span>&ndash;&gt;
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children && child.children.length>0" :router="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              &lt;!&ndash;<svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>&ndash;&gt;
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>-->
    </template>
  </div>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.routes)
  }
}
</script>

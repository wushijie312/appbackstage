<template>
  <a-menu
    theme="dark"
    mode="inline"
    :openKeys="openKeys"
    @openChange="onOpenChange"
    :selectedKeys="[$route.path]"
  >
    <template v-for="item in list">
      <a-menu-item v-if="!item.children" :key="item.key">
       
          <router-link :to="item.key"><a-icon :type="item.type"/>
           <span>{{item.title}}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.key"/>
    </template>
  </a-menu>
</template>

<script>
import { mapState } from "vuex";
const SubMenu = () => import("@/components/nav/SubMenu");
export default {
  data() {
    return {
      // openKeys: ["assemble"]
      openKeys: [this.$route.path.substr(1, this.$route.path.lastIndexOf("/")-1)]
    };
  },
  props: ["list", "rootSubmenuKeys"],
  components: {
    "sub-menu": SubMenu
  },
  watch:{
    '$route.path':function(to,from){
      let routeLen=to.split('/');
      if(routeLen.length==2){
         this.openKeys = [];
      }
    }
  },
  methods: {
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
@import "../../assets/css/index.less";
</style>
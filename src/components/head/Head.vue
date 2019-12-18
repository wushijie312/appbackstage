<template>
  <a-row class="fr" style="margin-right:24px;" type="flex" justify="end">

    <a-dropdown>
    <a class="ant-dropdown-link" href="#">刘盼盼 <a-icon type="user" /> </a>
    <a-menu slot="overlay">
      <a-menu-item>退出</a-menu-item>
    </a-menu>
  </a-dropdown>
  </a-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState({
      loginData: state => state.login.loginData,
      change_headSize_color: state => state.themeColor.change_headSize_color
    })
  },
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    },
    headSignOut() {
      window.open("https://yangguangqicai.com/", "_self");
    },
    enterpriseprocurement() {
      window.open("https://portal.yangguangqicai.com/", "_bank");
    },
    HeaderWelfareMall() {
      window.open("https://iwf.yangguangqicai.com", "_bank");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
@import "../../assets/css/index.less";
.head_publish {
  margin: 17px 0;
}
</style>
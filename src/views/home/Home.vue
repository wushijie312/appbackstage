<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height:100%;">
    <a-layout-sider v-if="!responsive" :trigger="null" collapsible v-model="collapsed">
      <Logo/>
      <Nav :list="list" :rootSubmenuKeys="rootSubmenuKeys"/>
    </a-layout-sider>
    <a-drawer v-else placement="left" :closable="false" @close="onClose" :visible="visible">
      <Logo/>
      <Nav :list="list" :rootSubmenuKeys="rootSubmenuKeys"/>
    </a-drawer>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          v-if="!responsive"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="collapseState"
        />
        <a-icon
          v-else
          class="trigger"
          :type="switchIcon ? 'menu-unfold' : 'menu-fold'"
          @click="showDrawer"
        />

        <a-breadcrumb v-if="!responsive" style="display:inline-block;position:relative;">
          <a-breadcrumb-item
            v-for="breads in breadList"
            :key="breads.name"
            style="color:rgba(0,0,0,0.45);"
          >
            <transition name="breadcrumb" mode="out-in">
              <span :key="breads.name" v-if="breads.name=='首页'">
                <router-link to="/dashboard" style="color:#333;">{{breads.name}}</router-link>
              </span>
              <span v-else :key="breads.name" style="position:relative;display:inline-block;">{{breads.name}}</span>
            </transition>
          </a-breadcrumb-item>
        </a-breadcrumb>

        <Head/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 0px 24px 16px',overflow:'auto' }"
      >
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
const Nav = () => import("@/components/nav/Nav");
const Head = () => import("@/components/head/Head");
const Logo = () => import("@/components/logo/Logo");
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      visible: true,
      lastIndex: 0,
      is_Exist: true,
      switchIcon: true,
      fade_toggle: true,
      rootSubmenuKeys: [
        "/dashboard",
        "shop",
        "order",
        "assemble",
        "mall",
        "member"
      ],
      breadList: [{}]
    };
  },
  computed: {
    ...mapState({
      collapsed: state => state.home.collapsed,
      responsive: state => state.home.responsive
    }),
    list() {
      return [
        {
          key: "/dashboard",
          type: "home",
          title: "首页"
        },
        {
          key: "shop",
          type: "gift",
          title: "商品管理",
          children: [
            {
              key: "/shop/shop",
              title: "管理商品"
            },
            {
              key: "/shop/sort",
              title: "商品分类"
            },
            {
              key: "/shop/upload",
              title: "上传商品"
            },
            {
              key: "/shop/wa",
              title: "wa"
            }
          ]
        },
        {
          key: "order",
          type: "shopping",
          title: "订单管理",
          children: [
            {
              key: "/order/order",
              title: "订单"
            }
          ]
        },
        {
          key: "assemble",
          type: "usergroup-add",
          title: "拼团管理",
          children: [
            {
              key: "/assemble/assemble",
              title: "拼团"
            }
          ]
        },
        {
          key: "mall",
          type: "shop",
          title: "商城管理",
          children: [
            {
              key: "/mall/mall",
              title: "商城"
            }
          ]
        },
        {
          key: "member",
          type: "team",
          title: "会员管理",
          children: [
            {
              key: "/member/member",
              title: "会员"
            }
          ]
        }
      ];
    }
  },
  watch: {
    $route(to, from) {
      // 左侧导航点击没有二级标题时让所有二级列表隐藏
      if (this.responsive) {
        this.visible = false;
        this.is_Exist = false;
        this.collapseMobileState(true);
      }
      //面包屑
      this.getBreadcrumb();
    }
  },
  mounted() {
    var _this = this;
    _this.changeScreen(_this, true);
    window.onresize = function() {
      _this.changeScreen(_this);
    };
    //面包屑
    this.getBreadcrumb();
  },
  components: {
    Nav,
    Head,
    Logo
  },
  methods: {
    showDrawer() {
      this.visible = true;
      this.switchIcon = false;
    },
    onClose() {
      this.visible = false;
      this.is_Exist = false;
      this.switchIcon = true;
    },
    changeScreen(_this, isVal) {
      // 定义窗口大小变更通知事件
      const screenWidth = document.documentElement.clientWidth; //窗口宽度
      if (screenWidth < 1090) {
        _this.lastIndex = screenWidth;
        _this.responsiveState(true);
        _this.visible = _this.is_Exist ? true : false;
      } else {
        if (screenWidth >= _this.lastIndex) {
          _this.lastIndex = screenWidth;
          _this.collapseMobileState(false);
        }
        this.is_Exist = true;
        _this.responsiveState(false);
      }
    },
    getBreadcrumb() {
      let routes = this.$route.matched[1];
      if (JSON.stringify(routes.meta) == "{}") {
        this.breadList = routes.parent.meta;
      } else {
        this.breadList = routes.parent.meta.concat(routes.meta);
      }
      console.log(this.breadList);
    },
    ...mapMutations(["collapseState", "responsiveState", "collapseMobileState"])
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
/* .breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s ease-in-out;
}
.breadcrumb-enter, .breadcrumb-leave-to {
  opacity: 0;
  top:20px;
} */

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
}
.breadcrumb-enter,.breadcrumb-leave-active {
  transform: translateX(20px);
}
</style>
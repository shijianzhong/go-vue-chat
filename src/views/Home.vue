<template>
  <div class="home-box">
    <group v-if="sindex==0">
      <chat></chat>
    </group>
    <group v-else-if="sindex==1">
      2
    </group>
    <group v-else-if="sindex==2">
      3
    </group>
    <group v-else-if="sindex==3">
      4
    </group>

    <tabbar v-model="sindex" class="mytab-bar">
      <tabbar-item>
        <img
          slot="icon"
          src="../assets/icon_nav_msg.png"
        >
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item>
        <img
          slot="icon"
          src="../assets/icon_nav_msg.png"
        >
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item>
        <!-- link="/component/demo" -->
        <img
          slot="icon"
          src="../assets/icon_nav_msg.png"
        >
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <img
          slot="icon"
          src="../assets/icon_nav_msg.png"
        >
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from "vux";
import chat from "@/components/chat.vue"
export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    chat
  },
  data() {
    return {
      sindex: 0
    };
  }
};
</script>
<style lang="less">
  .home-box{
    .mytab-bar{
      position: fixed;
    }
    .weui-cells{
      margin-top: 0px;
    }
  }
</style>

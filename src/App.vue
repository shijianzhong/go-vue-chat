<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import IrisClient from "./websocket/irisClient.js";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["receiveMsg"])
  },
  watch: {
    receiveMsg(val) {
      this.setLatelyMsgsAction({other:true,msg:val});  //other区分别人还是自己发的
    }
  },
  created() {
    var client = new IrisClient(this.setReceiveMsgAction);
    this.setSocketClientAction(client);
  },
  methods: {
    ...mapActions(["setSocketClientAction", "setReceiveMsgAction","setLatelyMsgsAction"])
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>

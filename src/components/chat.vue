<template>
  <div class="chat-box">
    <div class="chat-box-header">
      groupInfo
    </div>
    <div
      class="chat-box-body"
      ref="chatboxBody"
    >
      <div
        class="chat-box-body-row"
        v-for="(i,index) in latelyMsgs"
        :key="index"
      >
        <div
          v-if="i.other"
          style="padding:2px;background-color: antiquewhite;display: inline"
        >{{i.msg}}</div>
        <div
          v-else
          style="padding:2px;float:right;background-color: #9EEA6A;display: inline"
        >{{i.msg}}</div>
      </div>
    </div>
    <div class="chat-box-footer">
      <group>
        <x-input
          class="weui-vcode"
          v-model="msg"
          placeholder="输入消息"
        >
          <x-button
            slot="right"
            type="primary"
            mini
            @click.native="sendMsg"
          >发送</x-button>
        </x-input>
      </group>
    </div>
    <x-dialog
      :show.sync="show"
      class="dialog-con"
    >
      <div class="input-box">
        <group>
          <x-input
            title="群昵称："
            v-model="userInfo.name"
            name="username"
            placeholder="群聊昵称"
          ></x-input>
        </group>
        <group>
          <x-input
            title="手机号："
            v-model="userInfo.mobile"
            name="mobile"
            placeholder="手机号（选填）"
          ></x-input>
        </group>
        <group>
          <x-input
            title="微信号："
            v-model="userInfo.wxno"
            name="wxno"
            placeholder="微信号（选填）"
          ></x-input>
        </group>
        <group>
          <x-button
            @click.native="Login"
            type="primary"
          >提交</x-button>
        </group>
      </div>
    </x-dialog>

  </div>
</template>
<script>
import { XInput, Group, XButton, XDialog } from "vux";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    XInput,
    Group,
    XButton,
    XDialog
  },
  data() {
    return {
      msg: "",
      show: true,
      userInfo: {
        name: "",
        mobile: "",
        wxno: ""
      }
    };
  },
  computed: {
    ...mapGetters(["socketClient", "latelyMsgs", "receiveMsg"])
  },
  watch: {
    receiveMsg(val) {
      this.$nextTick(() => {
        document.scrollingElement.scrollTop = this.$refs.chatboxBody.scrollHeight;
      });
    }
  },
  created(){
    if(!localStorage.getItem('user')){
      this.show=true;
    }else{
      this.show=false;
      this.userInfo = JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    ...mapActions(["setLatelyMsgsAction"]),
    sendMsg() {
      this.socketClient.SendMsg(`${this.userInfo.name}:${this.msg}`);
      this.setLatelyMsgsAction({ other: false, msg: this.msg });
      this.$nextTick(() => {
        document.scrollingElement.scrollTop = this.$refs.chatboxBody.scrollHeight;
      });
      this.msg = "";
    },
    Login() {
      localStorage.setItem("user",JSON.stringify(this.userInfo));
      this.show=false;
    }
  }
};
</script>

<style lang="less">
.chat-box {
  position: relative;
  .chat-box-header {
    height: 2rem;
    background-color: aquamarine;
    color: black;
    position: fixed;
    top: 0px;
    width: 100%;
    text-align: center;
  }
  .chat-box-body {
    margin-top: 2rem;
    margin-bottom: 120px;
    .chat-box-body-row {
      padding: 1rem;
    }
  }
  .chat-box-footer {
    border-top: 1px solid goldenrod;
    position: fixed;
    bottom: 70px;
    width: 100%;
    background-color: white;
    opacity: 1;
  }
  .dialog-con {
    .input-box {
      margin: 3rem 1em;
    }
  }
}
</style>


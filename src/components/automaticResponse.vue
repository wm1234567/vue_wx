<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left:15px">
    <el-tab-pane label="关键词回复" name="first">
      <key-words-reply/>
    </el-tab-pane>
    <el-tab-pane label="收到消息回复" name="second">
      <message-reply/>
    </el-tab-pane>
    <el-tab-pane label="被关注回复" name="third">
      <pay-attention-to-reply/>
    </el-tab-pane>
  </el-tabs>
    
  </div>

</template>

<script>
import keyWordsReply from '@/page/keyWordsReply';
import messageReply from '@/page/messageReply';
import payAttentionToReply from '@/page/payAttentionToReply';
  export default {
    data(){
      return {
        activeName: 'first',
      }
    },
    components: {
      keyWordsReply,
      messageReply,
      payAttentionToReply
    },
    methods: {
       handleClick(tab, event) {
      }
    }
  }
</script>
<style>

</style>

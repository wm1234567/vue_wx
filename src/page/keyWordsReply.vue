<template>
  <!-- <div  @click="routerTo">跳转 -->
    <router-link :to="{ path: '/customMenu', query: { userId: 999}}">组件传值</router-link>
    <!-- <router-link :to="{ name: 'customMenu', params: { userId: 999}}">组件传值</router-link> -->

  <!-- </div> -->

</template>
<script>
  export default {
    name: 'keyWordsReply',
    data() {
      return {

      }
    },

    methods: {
      routerTo() {
        this.$router.push({
          name: 'customMenu',
          params: {
            userId: 123
          }
        });
      }
    },

  }

</script>
<style>

</style>

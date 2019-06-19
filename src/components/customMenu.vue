<template>
  <div>接:
    <!-- {{this.$route.params.userId}} -->

    {{this.$route.query.userId}}

  </div>
</template>
<script>
  export default {
    name: 'customMenu',
    data() {
      return {

      }
    }
  }

</script>

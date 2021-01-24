<template>
  <div class="profile">    
    <h2>Profile page ({{ UserId }})</h2>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
        UserId: this.$route.params.user_id //reach this route user_id from parameter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2{
        color: green;
    }
</style>

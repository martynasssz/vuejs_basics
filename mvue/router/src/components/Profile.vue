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
  },
  methods:{  //created to load parameter without refreshig page
      updateId(){
          this.UserId = this.$route.params.user_id
      }
  },
  watch:{   //created to load parameter without refreshig page
     $route:'updateId' 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2{
        color: green;
    }
</style>

<template>
    <div id="allfriends">
        <h2>All friend</h2>
        <div v-for="(friend,index) in friends" :key="index"> <!-- fast data witch we be visible ||| with key we definde index-->
        <h6 @click="unfriend(friend.name)">{{ friend.name }}</h6>  <!-- click event define method-->              
        </div>
    </div>
</template>

<script>
export default {
   name: 'AllFriends',
   props: ['friends'],
   data(){
       return {
           
       }
   },
   methods:{
       unfriend(name) { //name parameter
            this.$emit('delete',{name})        //if we want to send the request from child component to the mother component we have to use emit. emit have two parameters: one name and another will be as a value.
       }
   }
}
</script>

<style scoped >  
   h6 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
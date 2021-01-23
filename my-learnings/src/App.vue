<template>
  <div id="app">
    <h2> {{title}} </h2>
    <Navbar></Navbar> <!-- to display navbar component-->
    <AllFriends :friends="friends" @delete="deleteFriends"></AllFriends> <!-- we pass all friends -->
    <OnlineFriends :friends="friends"></OnlineFriends>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue' //define component included in root component
import AllFriends from './components/AllFriends.vue'
import OnlineFriends from './components/OnlineFriends.vue'
//import sidebar from './components/Sidebar.vue'
export default {
  name: 'App',  //one property
    data(){     //data is method
      return {
        title: 'Vue website is running',
        friends:[ //return object friend with array //now can we access all this array in our every pages  //friend added in root component
               { name: 'A', online:true},
               { name: 'B', online:false},
               { name: 'C', online:true},
               { name: 'D', online:true},
               { name: 'E', online:false}
           ] 
        
        //title is object with assigned value
      }
    },
    components:{
      Navbar, //Sidebar   //defined two components Navbar and Sidebar
      AllFriends,
      OnlineFriends
    },
    methods:{
      deleteFriends(payload){  
        //console.log(payload)
        this.friends = this.friends.filter(friend => {
          return friend.name !== payload.name
        })
      }
    }
 
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <h2> {{title}} </h2>
    <Navbar></Navbar> <!-- to display navbar component-->
    <Hook></Hook>
    
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue' //define component included in root component
import Hook from './components/Hook.vue'  // import component

//import sidebar from './components/Sidebar.vue'
export default {
  name: 'App',  //one property
    data(){     //data is method
      return {
        title: 'Vue website is running',
   
      }
    },
    components:{
      Navbar, //Sidebar   //defined two components Navbar and Sidebar
      Hook
      
    },
    methods:{
     
      
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

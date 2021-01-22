<template>
  <div id="app">
    <h2> {{title}} </h2>
  </div>
</template>

<script>

export default {
  name: 'App',  //one property
    data(){     //data is method
      return {
        title: 'Vue vebsite is running' //title is object with assigned value
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

<template>
    <div class="Hook">
        <h1> {{ title }} </h1> <!-- pass title to property-->
        <button @click="ChangeTitle">Click Me</button> <!-- after click my will be update name form "Hook main data" to "Easy learning"--> 
    </div>    
</template>

<script>
export default {
   name: 'Hook',
   data(){
       return { 
          title: 'Hook Main data'          //pass property title
       }
   },
   methods: {
      ChangeTitle(){
          this.title = 'Easy learning' 
      } 
   },
//    beforeMount (){
//        alert('Mount') ////show alert after created 
//    },

   beforeCreate() {  //function from hooks
   alert('Before created hook')   //show alert firstly
   },
   created (){
       alert('Created hook') ////show alert after created after that page will be loaded
   },
   beforeUpdate(){
       alert("Before update massage") 
   }




}
</script>

<style>  
   

</style>
<template>
    <div class="Hook">
        <h1> Posts </h1><hr> <!-- pass title to property-->
        <div v-for="post in posts" :key="post.id"> <!-- :key we want to get id using :key-->
            <h2> {{post.title}}</h2> <!-- we display post title-->
            <p>{{post.body}}</p> <!-- we display body-->
            <p>{{post.body}}</p>
        </div>

       
    </div>    
</template>

<script>
import axios from 'axios' //inpor jsonplaceholder
export default {
   name: 'Hook',
   data(){
       return { 
           posts:[] 
       }
   },
   methods: {
     
   },
   created(){  //created hook
        axios.get('https://jsonplaceholder.typicode.com/posts') // if we get any data, will work then() else catch()
        .then(response => {
            this.posts = response.data  //we put everything from response data to post:[] array
        })
        .catch(error => {  //if we have no any data error will be showed
            console.log(error)
        })
   }
}
</script>

<style>  
h1{
    color: red;
    text-align: center;
}

</style>
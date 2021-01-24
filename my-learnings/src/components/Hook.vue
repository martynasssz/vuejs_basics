<template>
    <div class="Hook">
        <h1> Posts </h1><hr> <!-- pass title to property-->
        <input type="text" v-model="searchTrem" placeholder="Search">

        <div v-for="post in filtersearch" :key="post.id"> <!-- :key we want to get id using :key  // filterseach is a place we want search-->
            <h2> {{post.title}}</h2> <!-- we display post title-->
            <p>{{post.body | snippet}}</p> <!-- we display body-->
           
        </div>

       
    </div>    
</template>

<script>
import axios from 'axios' //inpor jsonplaceholder
export default {
   name: 'Hook',
   data(){
       return { 
           posts:[],
           searchTrem: ''  //property where will be displa
       }
   },
   computed:{ //computed property //in computed arrea define
       filtersearch(){   //define method
            return this.posts.filter(post =>{//we want acsess property
                return post.title.match(this.searchTrem)  // return all the data we will take with this post, it is title //return another function match, in mach areat define this property searchTrem
            })     
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
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Declare globally Filter Created
Vue.filter('snippet' , val=> {   //val is value we can name no mater how we want
  if(!val || typeof(val) != 'string') return '' //if is no value or value type not a string, then return empty
  val = val.slice(0,100)  // else   //index 0, and haw many characters we want to define, it will be visible 100 charakters
  return val //return value
})

new Vue({
  render: h => h(App),
}).$mount('#app') //the same thing as using el:#app loadimg id app from index.thml

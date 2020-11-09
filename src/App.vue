<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import storage from './storage/index.js'

export default {
  name:'app',
  data(){
    return {

    }
  },
  created(){

  },
  mounted(){
    // storage.setItem("abc",{"a":"1","b":"2","c":"3"},"user");
    // storage.clear('phone')
    // storage.clear('abc','user')
    // console.log(storage.getItem("abc","user"))

    this.axios.get("/user/login").then(res => {
      console.log(res,'res')
    })

  },
  methods:{
    
  }

}
</script>
<style>
</style>

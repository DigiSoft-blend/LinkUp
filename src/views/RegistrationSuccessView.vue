<template>
  <div class="row p-0 m-0">
   <Loader v-if="getLoader" class="text-center"></Loader> 
  
<div class="col-md-12 col-12-main">

 <div class="cov text-center  rounded  animate__animated animate__fadeInRight"> 
  

  <main class="p-4  text-dark">
    <p class="h2 congrats-text" style="font-size:24px">Congratulations !</p>
    <p class="lead text-info">{{ regUser.email }}</p>
    <p class="lead">your account has been created successfully</p>
    <p class="lead"></p>
    <p class="lead mt-5">
       <router-link  class="btn btn-lg btn-success btnz2 text-light" to="/login">Get started</router-link>
    </p>
  </main>
   
   
 
</div>
    </div>
  </div>
</template>



<script>
import Loader from "./Loader.vue";
import { onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
    setup(){
       const store = useStore()
       onMounted(()=> startConfetti() )
       const regUser = computed(()=> store.getters.getRegisteredUser)
       return { regUser }
    },
    components: { Loader }
    // look into your love walk with the lord
    // faith walks by love
}
</script>



<style scoped>

.col-12-main{
  position: relative;
  display: flex;
  justify-content: center;
}

.cov{
  position: absolute;
  margin-top: 13%;
}


.btnz2{
  border-radius: 50px;
  width: 200px;
}

.congrats-text{
  font-size: 40px !important;
}



</style>
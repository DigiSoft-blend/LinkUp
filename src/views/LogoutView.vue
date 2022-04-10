<template>
  <div>
     <Loader v-if="Loader" class="text-center"> </Loader> 
  </div>
  <div class="row m-0 p-0">
    <div class="col-md-12 logout-content" >
      <div class="container d-flex justify-content-center">
        <h1>Logging out</h1>
      </div>
    </div>
  </div>
</template>

<script>

 import Loader from "./Loader.vue"
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
import router from '../router'
import { onMounted } from '@vue/runtime-core'
 export default {
    setup(){

     const store = useStore()
     const Loader = computed(() => store.getters.getLoader)
     const logout = () => {
       store.dispatch('logout')
       .then(response => {
         router.push("/login")
       })
       .catch(error => {
         console.log(error)
       })
     }

    onMounted(()=> {
     logout()
    })  

     return{Loader, logout}
    },
    components: { Loader }
}

</script>

<style scoped>
  .logout-content{
    background-image: url("/assets/images/samples/Banner_bg.jpg");
    min-height: 100vh !important;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .logout-content h1{
    color: white !important;
    position: absolute;
    top: 40%;
    justify-content: center;
  }
</style>
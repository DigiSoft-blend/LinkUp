<template>
   <div class="content-wrapper p-2">
       <facebook-loader v-if="myData"
        :speed="1"
        :animation="true"
         primaryColor="black"
         secondaryColor="white"
         height="100px"
       >
       </facebook-loader>
       
       <div v-else class="my-real-content"> 
           <p>{{ myData }}</p>
       </div>
   </div> 
</template>

<script>
import { FacebookLoader } from 'vue-content-loader';
import { ref } from 'vue';
import { onMounted } from 'vue';
export default {
  setup(){
     const myData = ref(true)
     onMounted(()=>{
         setTimeout(()=>{
             myData.value = false
         },5000)
     })
   return { myData }  
  },  
  components:{ FacebookLoader }
}
</script>

<style scoped>
  .content-wrapper{
      background-color: #2e2e2e !important;
  }
</style>
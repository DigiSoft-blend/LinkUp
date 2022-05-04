<template> 
<div  class="container-fluid page-body">
<div  class="row">
    <div class="col-md-12">
       <TopNavComponent></TopNavComponent>
    </div>  
  </div>
  
  <div class="row main-body" :class="backgroundModeParent" ref="scrollComponent">             
    <LeftSideNavComponent></LeftSideNavComponent>   
    <RightSideNavComponent></RightSideNavComponent>
    <NotificationsComponent></NotificationsComponent>
    <!-- <MainBodyComponent id="con" ></MainBodyComponent>   -->
  </div>
</div>
</template>

<script>


import TopNavComponent from '../components/TopNavComponent.vue';
import LeftSideNavComponent from '../components/LeftSideNavComponent.vue';
import RightSideNavComponent from '../components/RightSideNavComponent.vue';
import MainBodyComponent from '../components/MainBodyComponent.vue'
import NotificationsComponent from '../components/NotificationsComponent.vue';

import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, onUpdated } from 'vue';
export default {
    setup(){
       const store = useStore()
 
       onMounted(() => {
       store.dispatch("Post")
       store.dispatch('AuthUser')
       store.dispatch("getNotifications")
       store.dispatch("Users")
       store.dispatch("loadLikes")
       })

    
      
      
       const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)


       return { backgroundModeParent }
    },
    components:{ 
      TopNavComponent,
      LeftSideNavComponent,
      RightSideNavComponent,
      MainBodyComponent,
      NotificationsComponent
     }
    
};

</script>

<style scoped>
.main-body{
  min-height: 100vh;
}
</style>

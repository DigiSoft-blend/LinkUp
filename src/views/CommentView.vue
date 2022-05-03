<template>
<Comment></Comment>   
<div class="container-fluid page-body">
  <div class="row main-body" :class="backgroundModeParent" ref="scrollComponent">             
    <LeftSideNavComponent></LeftSideNavComponent>   
    <RightSideNavComponent></RightSideNavComponent>
    <MainBodyComponent id="con" ></MainBodyComponent>  
  </div>
</div>
</template>

<script>

import TopNavComponent from '../components/TopNavComponent.vue';
import LeftSideNavComponent from '../components/LeftSideNavComponent.vue';
import RightSideNavComponent from '../components/RightSideNavComponent.vue';
import MainBodyComponent from '../components/MainBodyComponent.vue'
import Comment from '../components/CommentEditor.vue';

import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { onMounted, onUnmounted, onUpdated } from 'vue';
export default {
    setup(){
       const store = useStore()
    //const notification = computed(()=> store.getters.getNotificationState)
       const pageLoader = computed(()=>store.getters.getPageLoader)
       const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)


       return { pageLoader, backgroundModeParent,  }
    },
    components:{ 
      DashboardSkeletonView,
      TopNavComponent,
      LeftSideNavComponent,
      RightSideNavComponent,
      MainBodyComponent,
      Comment,
     }
    
};

</script>

<style scoped>
.main-body{
  min-height: 100vh;
}
</style>

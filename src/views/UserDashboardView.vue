<template>
<DashboardSkeletonView v-if="true"></DashboardSkeletonView>
    
<div v-else  class="container-fluid page-body bg-light">
<div  class="row">
    <div class="col-md-12">
       <TopNavComponent></TopNavComponent>
    </div>  
  </div>
  <div class="row">
    <AddPostComponent></AddPostComponent>
  </div>
   <div class="row">
   <StatusComponent></StatusComponent>
   </div> 
  <div class="row">             
    <LeftSideNavComponent></LeftSideNavComponent>   
    <RightSideNavComponent></RightSideNavComponent>
    <MainBodyComponent></MainBodyComponent>  
  </div>
</div>
</template>

<script>

import DashboardSkeletonView from './DashboardSkeletonView.vue';
import TopNavComponent from '../components/TopNavComponent.vue';
import LeftSideNavComponent from '../components/LeftSideNavComponent.vue';
import RightSideNavComponent from '../components/RightSideNavComponent.vue';
import MainBodyComponent from '../components/MainBodyComponent.vue'
import StatusComponent from '../components/StatusComponent.vue';
import AddPostComponent from '../components/AddPostComponent.vue';


import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
export default {
    setup(){
       const store = useStore()
       onMounted(() => store.dispatch('AuthUser'))
       const pageLoader = computed(()=>store.getters.getPageLoader)
       const page = computed(()=>store.getters.getPage)
       return { pageLoader, page }
    },
    components:{ 
      DashboardSkeletonView,
      TopNavComponent,
      LeftSideNavComponent,
      RightSideNavComponent,
      MainBodyComponent,
      StatusComponent,
      AddPostComponent,
     }
    
};

</script>

<style>


</style>

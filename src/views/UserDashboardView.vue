<template>
<Post></Post> 
<Comment></Comment> 
<Notification v-if="notification"></Notification>
<DashboardSkeletonView v-if="pageLoader"></DashboardSkeletonView>  
<div v-else  class="container-fluid page-body">
<div  class="row">
    <div class="col-md-12">
       <TopNavComponent></TopNavComponent>
    </div>  
  </div>
  <div class="row" >
    <AddPostComponent></AddPostComponent>
  </div>
   <!-- <div class="row" :class="backgroundModeParent">
   <StatusComponent></StatusComponent>
   </div>  -->
  <div class="row main-body" :class="backgroundModeParent" ref="scrollComponent">             
    <LeftSideNavComponent></LeftSideNavComponent>   
    <RightSideNavComponent></RightSideNavComponent>
    <MainBodyComponent id="con" ></MainBodyComponent>  
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
import Post from '../components/Post.vue'
import Comment from '../components/CommentEditor.vue';
import Notification from '../components/Notification.vue';

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

    
      
       const notification = computed(()=> store.getters.getNotificationState)
       const pageLoader = computed(()=>store.getters.getPageLoader)
       const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)


       return { pageLoader, backgroundModeParent, notification }
    },
    components:{ 
      DashboardSkeletonView,
      TopNavComponent,
      LeftSideNavComponent,
      RightSideNavComponent,
      MainBodyComponent,
      StatusComponent,
      AddPostComponent,
      Post,
      Comment,
      Notification
     }
    
};

</script>

<style scoped>
.main-body{
  min-height: 100vh;
}
</style>

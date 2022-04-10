<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import DashboardSkeleton from './views/DashboardSkeletonView.vue'
import ContentLoaderComponent from './components/ContentLoaderComponent.vue'
</script>

<template>
   
   <!-- <ContentLoaderComponent></ContentLoaderComponent> -->
  <RouterView /> 
</template>



<script>
export default {
  name: 'App',
  components: {
    // Tiptap,
    // TiptapCompositionApi
    ContentLoaderComponent
  }
}
</script>
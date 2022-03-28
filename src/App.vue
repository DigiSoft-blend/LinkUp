<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LogoutView from './views/LogoutView.vue'
import DashboardSkeleton from './views/DashboardSkeletonView.vue'
import Tiptap from './components/Tiptap.vue'
import TiptapCompositionApi from './components/TiptapCompositionApi.vue'
</script>

<template>
   <!-- <Tiptap /> -->
   <!-- <TiptapCompositionApi></TiptapCompositionApi> -->
  <RouterView /> 
  <!-- <Suspense>
    <template #default>
     <LogoutView></LogoutView>
    </template>
    <template #fallback>
     <DashboardSkeleton></DashboardSkeleton>
    </template>
  </Suspense> -->
</template>



<script>
export default {
  name: 'App',
  components: {
    Tiptap,
    TiptapCompositionApi
  }
}
</script>
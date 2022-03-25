<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LogoutView from './views/LogoutView.vue'
import DashboardSkeleton from './views/DashboardSkeletonView.vue'

</script>

<template>
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
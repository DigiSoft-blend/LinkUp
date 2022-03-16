<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import LogoutView from './views/LogoutView.vue'
import DashboardSkeleton from './views/DashboardSkeletonView.vue'

</script>

<template>
  <!-- <RouterView /> -->
  <Suspense>
    <template #default>
     <LogoutView></LogoutView>
     <!-- <ProfileCard></ProfileCard> -->
    </template>
    <template #fallback>
     <DashboardSkeleton></DashboardSkeleton>
     <!-- <ProfileCardSkeleton></ProfileCardSkeleton> -->
    </template>
  </Suspense>
</template>
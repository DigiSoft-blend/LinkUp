<template>
  <div class="col-md-5  container">
    <div class="notification-wrapper row gy-4 mb-5">
    <div class="d-flex justify-content-between">
      <h3 class="mt-4">Notifications</h3> 
      <p class="mt-4">{{ notifications.length }}&nbsp; unread | 0 read</p>  
    </div>
    <div class="d-flex justify-content-between">
     <h6>View all</h6>
     <p>Mark all as read</p>
    </div>
     <div v-for="notification in notifications" :key="notification.id" class=" m-0 p-0" :class="backgroundMode" >
         <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3" :class="backgroundMode">
                  <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class=" p-user-name">{{ notification.data.user_name }} says</h6>
                            </div>

                            <p class="text-muted">{{ notification.data.notification_text }}</p>
                            <div class="d-flex">
                               <span class="text-muted">1 min</span><span class="mx-1 text-primary mdi mdi-earth"></span><p class="mx-2 text-primary fw-bold">&nbsp;View</p>
                            </div>
                            <!-- <p class="text-muted p-card-header">{{ notification.data.notification_text }}</p> -->
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1"><i class="mdi mdi-dots-horizontal"></i></p>
          </div>
     </div>
    </div>
   </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
export default {
    setup(){
       const store = useStore()
       const backgroundMode = computed(()=> store.getters.getBackgroundMode)
       const notifications = computed(()=>store.getters.getbackEndNotifications)
       return{backgroundMode, notifications}
    }
}
</script>

<style>
.notification-wrapper{
    margin-top: 40px !important;
}
</style>
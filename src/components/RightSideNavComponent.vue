<template>
    <nav id="sidebarMenu" class="col-md-3 sidebar-right py-4 d-md-block  collapse" :class="backgroundModeParent">
      <div class="position-sticky pt-5">
       <ul class="nav flex-column mb-auto px-4">
          <li  class="nav-item item">
            <div class="d-flex  d-xl-flex justify-content-between">
              <p class="Trend-text text-muted p-trending-post ms-4">Friends/contacts</p>
                 <i class="mdi mdi-dots-horizontal"></i>
            </div>      
          </li>
          <li v-for="user in users" :key="user.id" class="nav-item item">
              <div class="preview-list preview-list-right-nav ms-3">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">{{ user.name }}</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                </div>
          </li>
         
          
         
          <li class="nav-item px-2 ms-3">
            <p class="text-muted text-muted p-see-all">See all</p>
          </li>
        </ul>


      
      </div>
    </nav> 
</template>


<script>
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
export default{
 setup(){
   const store = useStore()
   const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)
   const users = computed(()=>store.getters.getUsers)
   return{ backgroundModeParent , users }
 }
}
</script>

<style scoped>
  .preview-thumbnail img{
     width: 35px !important;
     height: 35px !important;
  }
.preview-item{
  margin:0;
  padding: 0;
  margin-top: 5px;
}

.preview-list-right-nav{
 padding: 3px;
 border-radius: 10px;
}

  
</style>

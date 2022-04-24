<template>
    <nav id="sidebarMenu" class="col-md-3 sidebar-right py-4 d-md-block  collapse" :class="backgroundModeParent">
      <div class="position-sticky pt-5">
       <ul class="nav flex-column mb-auto px-4">
          <li  class="nav-item item">
            <div class="d-flex  d-xl-flex justify-content-between">
              <p class="Trend-text text-muted p-trending-post ms-4">People/Users</p>
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
                            <!-- <p class="text-muted p-sidbar-text"></p> -->
                            
                            <button @click="sendId(user.id)" class="btn btn-outline-light rounded-pill btn-2" :class="backgroundModeParent" >
                              <div class="d-flex justify-content-center">
                                 <div v-if="user.id == userId" class="spinner-border-1 spinner-border"  role="status">
                                 </div>
                                 <span class="">Follow</span>
                              </div>
                            </button>
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
import { ref } from "vue"

export default{
 setup(){

   const store = useStore()
   const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)
   const users = computed(()=>store.getters.getUsers)
   const userId = computed(()=>store.getters.getUserId)
   const sendId = (id)=>{
    store.commit("setUserId",id)
    setTimeout(()=>store.commit("setUserId",''),2000)
   }

   return{ backgroundModeParent , users, userId, sendId }
 }
}
</script>

<style scoped>
.spinner-border-1{
  height: 15px;
  width: 15px;
  padding: 5px;
}
.btn-2{
  border: solid 1px #fbfbfb !important;
  width: 120px;
}
.btn-2:hover{
  border: solid 1px rgb(61, 80, 255) !important;
}
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

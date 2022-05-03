<template>
    <nav id="sidebarMenu" class="col-md-3 sidebar-right py-4 d-md-block  collapse" :class="backgroundModeParent">
      <div class="position-sticky pt-5">
       <ul class="user-ul card p-2 nav flex-column mb-auto animate__animated animate__fadeInRight" :class="backgroundModeParent">
         
            <div class="d-flex heading-wrapper  justify-content-between" :class="backgroundModeParent">
              <p class="Trend-text  p-trending-post ms-1 fw-bold">Who to Follow</p>
              <i class="mdi mdi-dots-horizontal"></i>
            </div>      
         
          <li v-for="user in users" :key="user.id" class="nav-item item ">
            <div class="user-wrapper d-flex justify-content-between">
              <div class="preview-list preview-list-right-nav">
                      <div class="preview-item">
                         
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle" />
                          <div class="active"></div>
                        </div>

                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name fw-bold">{{ user.name }}</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">{{ user.email }}</p>
                          </div>
                        </div>
                      </div>
                </div>
                    <div class="follow-btn-wrapper">
                      <button @click="sendId(user.id)" class="btn btn-outline-muted rounded-pill btn-2 p-0 m-0">
                              <div class="d-flex justify-content-center">
                                 <div v-if="user.id == userId" class="spinner-border-1 spinner-border"  role="status">
                                 </div>
                                 <span class="text-primary fw-bold">&nbsp;Follow</span>
                              </div>
                    </button>
                    </div>
                </div>
          </li>
         
          
         
          <li class="nav-item ms-2">
            <p class="text-primary">See all</p>
          </li>
        </ul>



 <ul class="user-ul card p-2 nav flex-column mb-auto mt-3 animate__animated animate__fadeInRight" :class="backgroundModeParent">
         
            <div class="d-flex heading-wrapper  justify-content-between" :class="backgroundModeParent">
              <p class="Trend-text  p-trending-post ms-1 fw-bold">Events to engage in</p>
              <i class="mdi mdi-dots-horizontal"></i>
            </div>      
         
          <li  class="nav-item item ">
            <div class="user-wrapper d-flex justify-content-between">
              <div class="preview-list preview-list-right-nav">
                      <div class="preview-item">
                         
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name fw-bold">New Event</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Event Topic</p>
                          </div>
                        </div>
                      </div>
                </div>
                    <div class="follow-btn-wrapper">
                      <button  class="btn btn-outline-muted rounded-pill btn-2 p-0 m-0">
                              <div class="d-flex justify-content-center">
                                 <div v-if="true" class="spinner-border-1 spinner-border"  role="status">
                                 </div>
                                 <span class="text-primary fw-bold">&nbsp;Engage</span>
                              </div>
                    </button>
                    </div>
                </div>
          </li>
         
          
         
          <li class="nav-item ms-2">
            <p class="text-primary">See all</p>
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

.heading-wrapper{
  height: 40px;
}
.user-ul{
  background-color: rgb(236, 236, 236);
}
.follow-btn-wrapper{
  padding: 3px;
}

.follow-btn-wrapper button {
  padding: 7px !important;
  margin-top: 7px !important;
}

.user-wrapper{
  margin-bottom: 10px;
  height: 50px;
}
.spinner-border-1{
  height: 15px;
  width: 15px;
  padding: 5px;
}
.btn-2{
  width: 100px;
}
.btn-2:hover{
 border: solid 2px rgba(255, 255, 255, 0.521) !important;
  transition: 0.2s ease;
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

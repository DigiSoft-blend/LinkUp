<template>
    <nav id="mySidenav" class="col-md-3 sidebar-left p-4 d-md-block" :class="backgroundModeParent"  >
      <div class="position-sticky nav-div" :class="backgroundModeParent">
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item">
           
             <div class="preview-list mx-2">
                      <div class="preview-item">
                        <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name">{{ authUser.name }}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>


           <li class="nav-item">
            <router-link class="nav-link" :class="backgroundModeParent" to="/logout">
             <span class="">&#x1F354;</span>
              Log out
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
             <span class=""  >&#x1F624;</span>
              Groups
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
              <span class="mdi mdi-git" ></span>
              Marketplace
            </a>
          </li>

     
      <li class="mb-1 nav-item">
        <a class="align-items-center collapsed d-flex justify-content-between nav-link" :class="backgroundModeParent"  data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
        See more
          <span class="mdi mdi-chevron-down" style="font-size:20px" ></span>
        </a>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
             <li class="nav-item">
            <a class="nav-link" href="#">
             <span class="" >&#x1F354;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
             <span class="" >&#x1F624;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="mdi mdi-web" ></span>
              Integrations
            </a>
          </li>
        
          </ul>
        </div>
      </li>


          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
             <span class="" >&#x1F354;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
             <span class="" >&#x1F624;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
              <span class="mdi mdi-git" ></span>
              Integrations
            </a>
          </li>
        </ul>
        <hr>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span >Events</span>
          <a class="link-secondary"  href="#" aria-label="Add a new report">
           <span class="mdi mdi-calendar" ></span>
          </a>
        </h6>
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
               <span class="" >&#x1F554;</span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="backgroundModeParent" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav> 

</template>


<script>
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"

export default {
  setup(){
    const store = useStore()
    const authUser = computed(()=> store.getters.getAuthUser)
    const backgroundMode = computed(()=> store.getters.getBackgroundMode)
    const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)
    const textColor = computed(()=> store.getters.getTextColor)
    const sideNav = computed(()=> store.getters.getSideNav) 
    return { authUser, backgroundMode, backgroundModeParent, textColor, sideNav }
  }
}
</script>




<style scoped>
.nav-div{
  margin-top: 35px;
}

.nav-link{
  background-color: inherit; 
   border-radius: 18px;
}


.preview-thumbnail img{
     width: 35px !important;
     height: 35px !important;
}
</style>
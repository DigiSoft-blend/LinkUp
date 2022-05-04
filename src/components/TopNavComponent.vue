<template>
  <div class="fixed-top">
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg p-0" :class="backgroundMode" >
  <!-- Container wrapper -->
   
    <!-- Toggle button -->
    
     <img v-if="backgroundMode === 'dark' " class="navbar-brand small-screen-logo mx-2" src="/logo/default-monochrome-white.svg" alt="logo"/>
     <img  v-if="backgroundMode === 'light' " class="navbar-brand small-screen-logo mx-2" src="/logo/default-monochrome-black.svg" alt="logo" />     
       


    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse mt-1" id="navbarSupportedContent">
     
       <img  v-if="backgroundMode === 'dark' " class="navbar-brand logo mx-4" src="/logo/default-monochrome-white.svg" alt="logo" />
       <img  v-if="backgroundMode === 'light' " class="navbar-brand logo mx-4" src="/logo/default-monochrome-black.svg" alt="logo" />   
         
          <form style="">
             <div class="search">
               <input class="nav-form-input form-control" type="text" placeholder="Search Link up" aria-label="Search">
               <i class="mdi mdi-magnify icon text-dark"></i> 
             </div>
          </form>
      <!-- Left links -->
      <div class="link-div active">
         <router-link class="nav-link mdi mdi-home nav-icon tooltip-demo" to="/userdashboard" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link  mdi mdi-account-multiple-outline nav-icon" to="/userdashboard" data-bs-toggle="tooltip" data-bs-placement="bottom" title="People"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link mdi mdi-email-variant nav-icon" to="/userdashboard" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Mails"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link mdi mdi-bell  position-relative nav-icon" to="/notifications" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Events">
          <span class="position-absolute   translate-middle badge rounded-pill bg-danger fs-6">{{ notifications.length }}</span>
         </router-link>
      </div>

    </div>

     <div class="toggle-wrapper me-3">
         <label class="toggle">
           <input @click="setBackgroundMode" type="checkbox" :checked="(backgroundMode === 'dark') ? 'checked' : false">
           <span class="toggler round"></span>
         </label>
       </div>

    
    <!-- Collapsible wrapper -->

    <div class="collapse navbar-collapse justify-content-end me-4">

       
        <!-- Avatar -->
      <div class="dropdown me-3">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/assets/images/faces/face2.jpg"
            class="rounded-circle"
            height="40"
            alt="img"
            loading="lazy"
          />
          <span class="ms-2 text-dark"></span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <router-link class="dropdown-item" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>

       <!-- <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-plus iconn"></i>
      </a>

       <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-message iconn"></i>
      </a>

       <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-bell iconn"></i>
      </a>
       <a class="text-reset nav-icon2" href="#">
        <i class="mdi mdi-pocket iconn"></i>
      </a> -->

      
    </div>
 
   
    <button  @click="toggleSideNav" class="navbar-toggler" type="button">
      <i  class="mdi mdi-menu" :class="backgroundMode"></i>
    </button>
</nav>
<!-- Navbar -->
</div>
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
    const notifications = computed(()=>store.getters.getbackEndNotifications)

    const setBackgroundMode = () => {
      if(backgroundMode.value === 'dark'){
         store.commit('setBackgroundMode', 'light');
         store.commit('setParentBackgroundMode','parent-light');
         store.commit('setTextColor','dark')
      }else{
        store.commit('setBackgroundMode', 'dark');
        store.commit('setParentBackgroundMode','parent-dark');
        store.commit('setTextColor','light')
      }
      console.log(backgroundMode.value)
    }

     const toggleSideNav = () => {
        var superToggle = (element, class0) => {
          element.classList.toggle(class0);
        }
        superToggle(mySidenav, 'class1');
      }; 

    return { authUser, backgroundMode, setBackgroundMode, backgroundModeParent, textColor, toggleSideNav, notifications }
  }
}
</script>


<style scoped>

.toggle{
  position: relative;
  display: inline-block;
  width: 57px;
  height: 30px;
}

.toggle input{
  opacity: 0;
  width: 0;
  height: 0;
}

.toggler{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202B;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.toggler:before{
   position: absolute;
    content: 'L';
   text-align: center;
   font-weight: bolder;
   height: 23px;
   width: 24px;
   left: 4px;
   bottom: 4px;
   background: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
   transform: rotateZ(10deg);
}



input:checked + .toggler{
  background: #2196f3;
}

input:focus + toggler{
  box-shadow: 0 0 2px #2196f3;
}

input:checked + .toggler:before{
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px) rotateZ(10deg);
  border-right: solid 7px rgb(1, 2, 44);
  background: transparent;
   content: 'D';
  text-align: center;
}

.toggler.round{
  border-radius: 34px;
}

.toggler:before{
  border-radius: 50%;
}



.logo{
  width: 150px !important;
  height: auto !important;
  animation: squiz-in-out 3s linear infinite;
}

.small-screen-logo{
   width: 130px !important;
  height: auto !important;
   animation: squiz-in-out 3s linear infinite;
}
 .link-div{
   text-align: center;
   margin: 0px 37px 0px 20px;
   padding: 0;
 }

 .active{
   border-bottom: solid 4px rgb(0, 132, 255) !important;
   text-align: center;
   padding: 0;
  color: rgb(0, 132, 255);
 }

 .active .nav-icon{
   color: rgb(0, 132, 255);
 }

 .nav-icon{
   font-size: 25px;
   width: 91px;
   color: rgb(127, 128, 129);
 }

.nav-icon2{
  background-color: rgb(211, 211, 211);
  border-radius: 100%;
  padding: 6px;
  width: 41px;
  display: flex;
  justify-content: center;
 }

.nav-icon2 .iconn{
  margin-top: 2px;
  color: black;
} 

@keyframes squiz-in-out {
    0% {
       transform: rotateX(0deg)
    }
     50% {
       transform: rotateX(45deg)
    } 
    100%{
       transform: rotateX(0deg)
    } 
}
</style>

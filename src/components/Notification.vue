<template>
 <transition name="toast">
       <div  class="row">
           <div class="col-md-5  card-wrapper">
              <div class="card" :class="backgroundMode">
                <div class="card-header m-0 p-0" :class="backgroundMode">
                   <p class="text-middle  my-3" :class="backgroundMode">Notification &#x1F554;</p>
                    <p @click="exitNotification"  class="text-end"><i class="mdi mdi-close-circle px-3"></i></p>
                </div>
                <div class="card-body  border-top d-flex justify-content-center">
                    <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                     <span class="ms-2 my-1">{{ text }}</span>
                     <i class="mdi mdi-check-circle ms-2" style="font-size:20px"></i>
                </div>
              </div>
           </div> 
       </div>
   </transition>
</template>


<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  setup(){ 
    const store = useStore()  
    const backgroundMode = computed(()=> store.getters.getBackgroundMode)
    const text = computed(()=> store.getters. getNotificationText)
    return{ backgroundMode, text}
  },
}
</script>

<style scoped>

.toast-enter-from{
 opacity: 0; 
 transform: translateY(-100px);
}

.toast-enter-to{
 opacity: 1;
 transform: translateY(0px);
}

.toast-enter-active{
  transition: all 0.3s ease;
} 

.toast-leave-from{
 opacity: 1;
 transform: translateY(0px);
}

.toast-leave-to{
 opacity: 0; 
 transform: translateY(-100px);
}

.toast-leave-active{
   transition: all 0.2s ease;
}


.post-intro{
  color: #747272;
}
.preview-subject{
    font-weight: bolder;
}

.preview-thumbnail img{
     width: 45px !important;
     height: 45px !important;
     border: solid 1px rgb(141, 141, 141) !important;
  }

.text-middle{
    color: black;
}
.card-header{
  display: flex;
  justify-content: center;
  position: relative;
}
.card-header p{
    font-weight: bolder;
}

.card-header .text-end{
   position: absolute;
   top: 0;
   right: 0;
   font-size: 34px;
   color: rgb(196, 196, 196);
}



.row{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 9999999;
  margin: 0;
  padding: 0;
}

.card-wrapper{
  position: fixed;
  top: 100px;
}



</style>
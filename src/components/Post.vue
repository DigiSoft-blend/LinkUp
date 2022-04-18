

<template>
 <transition name="toast">
       <div v-if="postBtnState" class="row">
           <div class="col-md-5  card-wrapper">
              <div class="card" :class="backgroundMode">
                <div class="card-header m-0 p-0" :class="backgroundMode">
                   <p class="text-middle  my-3" :class="backgroundMode">Create posts &#x1F554;</p>
                    <p @click="postEditorClose"  class="text-end"><i class="mdi mdi-close-circle px-3"></i></p>
                </div>
                <div class="card-body  border-top p-0 m-0">
                   <div class="preview-list mx-3">
                      <div class="preview-item">
                        
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face9.jpg" alt="image" class="rounded-circle status" />
                        </div>
                       
                        <div class="preview-item-content d-flex flex-grow m-0 p-0 mx-2">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject">{{ authUser.name }}</h6>
                            </div>
                            <div class="d-flex">
                               <i class="mdi mdi-earth"></i> 
                               <p class="text-muted p-sidbar-text mx-1">Public</p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                <TiptapCompositionApi></TiptapCompositionApi>
                </div>
              </div>
           </div> 
       </div>
   </transition>
</template>


<script>
import TiptapCompositionApi from '../components/TiptapCompositionApi.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  setup(){

   const store = useStore()
      
      //gets the current state of post editor close/open button
      const postBtnState = computed(()=> store.getters.getPostBtnState)

      //closes post editor window 
      const postEditorClose = () =>{
       store.commit('postBtnState', false)
      }
      //sets backgroundMode dark  or light
      const backgroundMode = computed(()=> store.getters.getBackgroundMode) 

      const authUser = computed(()=> store.getters.getAuthUser)

      return {postBtnState, backgroundMode, authUser ,postEditorClose}
  },
  components:{
    TiptapCompositionApi
  }  
}
</script>

<style scoped>

.toast-enter-from{
 opacity: 0; 
 transform: translateX(-100px);
}

.toast-enter-to{
 opacity: 1;
 transform: translateX(0px);
}

.toast-enter-active{
  transition: all 0.3s ease;
} 

.toast-leave-from{
 opacity: 1;
 transform: translateX(0px);
}

.toast-leave-to{
 opacity: 0; 
 transform: translateX(-100px);
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
  background: rgba(77, 77, 77, 0.61) !important;
}

.card-wrapper{
  position: fixed;
  top: 100px;
}

@media(max-width: 765px){
 .card-wrapper{
  top:0;
  margin: 0;
  padding: 0;
 }
}

@media(max-width: 765px){
 .card{
  top:0;
  height: 100vh;
  border-radius: 0px;
 }
}

</style>
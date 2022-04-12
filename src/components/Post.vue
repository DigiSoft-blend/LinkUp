<template>
<transition name="toast">
    <div v-if="postBtnState" class="post-container">
        <div class="row">
           <div class="col-5 post-body">
              <div class="card post-content bg-dark text-light">
                <div class="card-header m-0 p-0 bg-dark text-light">
                   <p class="text-middle text-light my-3">Create post</p>
                    <p @click="postEditorClose" class="text-end"><i class="mdi mdi-close-circle px-3"></i></p>
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
                              <h6 class="preview-subject">Silas Udofia</h6>
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
              
                 <div class="container-fluid px-3">
                   <div class="border add-to-post-con border-muted mt-4 d-flex justify-content-between">
                      <p class="my-3 mx-3 para text-light">Add to your post</p>
                      <p class="para-down mx-3"><i class="mdi mdi-image text-danger image-mdi"></i></p>
                   </div>
                    <button class="btn btn-block mt-3 post-btn">Post</button>
                 </div>
                </div>
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
      const postBtnState = computed(()=> store.getters.getPostBtnState)
      const postEditorClose = () =>{
      store.commit('postBtnState', false)
    }
      return {postBtnState, postEditorClose}
  },
  components:{
    TiptapCompositionApi
  }  
}
</script>

<style scoped>

.toast-enter-from{
 opacity: 0;
 transform: translateX(-50px);
}

.toast-enter-to{
 opacity: 1;
 transform: translateX(0px);
}

.toast-enter-active{
  transition: all 0.3s ease;
} 
.post-btn{
  background-color: #e9e8e8;
   box-shadow: 0px 0px 0px 0px  white;
   border-radius: 11px;
}
.post-btn:hover{
  color: rgb(2, 128, 145);
}
.image-mdi{
  font-size: 20px;
}
.add-to-post-con{
  border-radius: 15px;
  position: relative;
}

.para-down{
  position: absolute;
  right: 0;
  top: 13px;
}
.para{
  color: black;
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

.post-container{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999999999;
  overflow: hidden;
  background: rgba(224, 224, 224, 0.61);
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-content{
    background-color: white;
    height: 400px;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 2px  rgba(110, 109, 109, 0.733);
}



@media(max-width: 740px  ){
.post-content{
    background-color: white;
    height: 100vh;
    width: 100vw;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 2px  rgba(209, 209, 209, 0.733);
}
}

.post-body{
  
}

.close-btn{
 
}
</style>
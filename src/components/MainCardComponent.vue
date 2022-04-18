<template>

 <div class="card status1 text-dark mt-2 box-shadow p-0 m-0">
          
           <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3" :class="backgroundMode">
                  <div class="preview-list col-11">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                         </div>
                        </div>
                        <div class="col-11 preview-item-content d-flex">
                         
                          <div @click="postEditorOpen" class="post-div col-11">
                            <p class="text-center text-dark">What's on your mind Silas ?</p>
                          </div>
                          <div>
                             <i class="fa fa-file-image mt-2 ms-3 text-danger" style="font-size:30px"></i>
                             <p class="ms-2 mt-1 mb-0">Photo</p>
                          </div>
                        </div>
                        
                      </div>
                 </div>
          </div>
         
          <div class="card-footer  py-3 border-top" :class="backgroundMode" >
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="d-flex  footer-div">
                      <i class="fa fa-video text-danger mt-1 me-1"></i>
                      <span>Live video</span>
                    </div>
                 </div>
                 <div class="col-4 border-start border-end border-muted">
                     <div class="footer-div">
                      <i class="fa-solid fa-images text-primary mt-1 me-1"></i>
                      <span>Photo/video</span>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="footer-div">
                        <i class="fa fa-smile text-warning mt-1 me-1"></i>
                        <span class="">Feeling/activity</span>
                    </div>
                 </div>
               </div>
          </div>
       </div>

  <!-- <div class="d-flex justify-content-center">
   <button class="btn btn-primary btn-gra" type="submit">New Posts</button>
  </div> -->
     <div v-if="postLoader" class="d-flex justify-content-center my-3">
        <div class="spinner-border" :class="backgroundMode" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <span class="ms-2 my-1">Uploading your post...</span>
     </div>

<div v-if="posts.length"  class="m-0 p-0">
    <div  v-for="post in posts" :key="post.id"  class="card mt-3 box-shadow p-0 m-0 mb-4" :class="backgroundMode">
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3" :class="backgroundMode">
                  <div class="preview-list">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle status" />
                         <div class="active"></div>
                         </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">{{ post.user.name }}</h6>
                            </div>
                            <div style="display:flex">
                               <span class="text-muted">1 days ago</span><span class="mx-2 text-primary mdi mdi-earth"></span>
                            </div>
                            <p class="text-muted p-card-header mt-2">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1"><i class="mdi mdi-dots-horizontal"></i></p>
          </div>
          <div class="card-body m-0 p-0" :class="backgroundMode">
             <div  class="mx-3">
               <p class="p-card-body" v-html="post.body" ></p>
             </div>
              <div class="image-wrapper d-flex justify-content-center py-1">
                 <img src="/cars/33120.jpg" class="img-fluid scale-image" alt="...">
              </div>
          </div>
          <div class="card-footer mt-4 py-3 border-top " :class="backgroundMode" style="border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="col-12 footer-div">
                      <i class="mdi mdi-thumb-up-outline"></i>
                      <p>10k</p>
                    </div>
                 </div>
                 <div class="col-4">
                     <div class="col-12 footer-div">
                      <i class="mdi mdi-message-outline"></i>
                      <p>12</p>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="col-12 footer-div">
                        <i class="mdi mdi-share-outline"></i>
                        <p class="">4</p>
                    </div>
                 </div>
               </div>
          </div>
       </div>
</div>
 <div  v-else class="container text-center mt-4  rounded-pill no-content-wrapper">
       <div  class=" text-center p-5 rounded-pill" :class="backgroundMode">
         <h1>No contents yet  &#x1F554;</h1>
       </div>
 </div>

</template>


<script>
import TiptapCompositionApi from '../components/TiptapCompositionApi.vue';
import setName from "../composibles/setName"
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
import { onMounted } from "vue"
import { ref } from 'vue'

export default {
  setup(){
    const store = useStore()
    const postEditorOpen = () =>{
      store.commit('postBtnState', true)
    }
    const getLikesCount = computed(() => store.getters.getLikesCount ) 
    const incrementLikes = () => store.dispatch('asyncIncrementLikes') 
    const backgroundMode = computed(()=> store.getters.getBackgroundMode)
    
    const posts = computed(()=> store.getters.getPost)
    const postLoader = computed(()=> store.getters.getPostLoaderState)
    return { getLikesCount, incrementLikes, postEditorOpen, backgroundMode, posts, postLoader }

    // const { Myname, changeName } = setName()
    // return { Myname, changeName }
  },
  components:{ TiptapCompositionApi }
}
</script>

<style scoped>

.no-content-wrapper{
  animation: lds-dual-ring 3s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    background: red;
  }
  100% {
    background: blue;
  }
}
.image-wrapper{
  overflow: hidden;
}

.scale-image:hover{
 transition: 1s;
 transform: scale(1.1);
}


.btn-gra{
  border-radius: 50px;
  width: 140px;
}
.mdi-dots-horizontal{
  font-size: 24px;
}
 .preview-item-content input{
     width: 28em;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }

.post-div{
  border-radius: 50px;
  background-color: #eeeeee !important;
  cursor:pointer;
}

.post-div p{
  font-size: 18px;
  margin-top: 16px;
}

@media(max-width:393px) {
  .preview-item-content input{
     width: 18em;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }

} 

 .status1{
    display: block;
  }

@media(max-width:765px) {
  .status1{
    display: none;
  }
}


.preview-item-content input{
     width: inherit;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
     font-size: 15px;
  }

.frm{
   width: inherit;
   display: flex;
} 
</style>
<template>

 <div class="card status1 text-dark mt-2 box-shadow p-0 m-0">
          
           <div class="card-header  d-flex  d-xl-flex justify-content-between  p-0 m-0 px-3" :class="backgroundMode">
                  <div class="preview-list col-11">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                         </div>
                        </div>
                        <div class="col-11 preview-item-content d-flex">
                         
                          <div @click="postEditorOpen" class="post-div col-12">
                            <p class="text-center text-muted">Hey what's on your mind ? &#x1F353;</p>
                          </div>
                          <!-- <div>
                             <i class="fa fa-file-image mt-2 ms-3 text-danger" style="font-size:30px"></i>
                             <p class="ms-2 mt-1 mb-0">Photo</p>
                          </div> -->
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

<div   class="m-0 p-0">
    <div  v-for="(post, index) in posts" :key="index"  class="card mt-3 box-shadow p-0 m-0 mb-4" :class="backgroundMode">
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
               <div  class="container d-flex justify-content-between">
                 <div class="d-flex text-muted">
                  <i class="mdi mdi-thumb-up-outline my-2 text-primary" ></i>
                  <p class="ms-2  my-2">{{ post.likes }}</p>
                  <p v-if="post.likes > 1 || post.likes == 0" class="ms-2  my-2">likes</p>
                   <p v-else class="ms-2  my-2">like</p>
                 </div>
                 <div class="d-flex text-muted">
                   <p class="ms-2  my-2">{{ post.comment }}</p>
                   <p v-if="post.comment > 1 || post.comment == 0" class="ms-2  my-2">Comments</p>
                   <p v-else class="ms-2  my-2">Comment</p>
                    <p class="ms-2  my-2">4</p>
                   <p class="ms-2  my-2">Shares</p>
                 </div>
               </div>
          </div>
          <div class="card-footer py-3 border-top " :class="backgroundMode" style="border:none">
           
               <div class="row row-footer">
                  <div class="col-4">
                    <div  class="col-12 footer-div" :class="backgroundModeParent">

                      <div v-if="post.id == postId" class="spinner-grow spinner-grow-1 text-info" role="status">
                      </div>

                      <i  v-if="post.authLiked != null" @click="like(post.id)" class="mdi mdi-thumb-up text-primary"></i>
                      <i  @click="like(post.id)" class="mdi mdi-thumb-up-outline" v-else ></i>
                      <p>{{ post.likes }}</p>
                    </div>
                 </div>
                 <div class="col-4">
                     <div class="col-12 footer-div" :class="backgroundModeParent">
                      <i class="mdi mdi-message-outline text-info"></i>
                      <p>{{ post.comment }}</p>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="col-12 footer-div" :class="backgroundModeParent">
                        <i class="mdi mdi-share-outline text-warning"></i>
                        <p class="">4</p>
                    </div>
                 </div>
               </div>
          </div>

          <div class="col-12">
            <div class="container-fluid p-2">
                <div class="p-0 m-0 d-flex px-2">
                  <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status comment-img ms-2" />
                  <div class="container m-0 px-2">
                    <div @click="commentEditorOpen(post.id)" class="container d-flex justify-content-between rounded-pill add-comment" :class="backgroundModeParent">
                       <p class="mt-1">Write a comment...</p>
                       <i class="mdi mdi-comment-outline mt-1"></i> 
                    </div>
                  </div>
                </div>
  
            </div>
          </div>

          
            <div v-for="comment in post.comments" :key="comment.id" class="col-11 container comment-container">
                <div class="d-flex">
                  <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status comment-img ms-2" />
                  <div class="comment-wrapper p-1  m-0 px-2 ms-2 rounded" :class="backgroundModeParent">
                     <p class="user-name p-0 m-0">{{ comment.user.name }}</p>
                     <span class="comment" v-html="comment.body" ></span>
                  </div>
                </div>

            <div class="container col-11 comment-reaction-wrapper text-muted">
               <div class="d-flex">
                <span class="time">12 mins</span>
                 <div v-if="comment.id == commentId" class="spinner-border-2 spinner-border ms-2"  role="status"></div>
                <span v-if="comment.authLiked != null"  @click="likeComment(comment.id)"  class="mx-3 text-primary">Like</span>
                <span v-else  @click="likeComment(comment.id)" class="mx-3">Like</span>
                 <span class="time">Reply</span>
                 <i class="mdi mdi-thumb-up-outline ms-3 me-2 text-primary"></i>
                 <span class="">{{ comment.likes }}</span>
              </div>
                     <!-- Replies here -->
              <div v-for="reply in comment.replies" :key="reply.id" class="d-flex reply-wrapper" :class="backgroundMode">
                 <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status replies-img" />
                <p class="ms-2">{{ reply.user.name }}</p>
                <p class="replies ms-2">{{ reply.body }}</p>
              </div>

             
           </div>
           </div>
           
            
         <div class="container comment-footer text-muted">
          <div class="d-flex justify-content-between">
           <p class="text-1 p-0 m-0">View 1 more comment</p>
           <p class="text-2 p-0 m-0">2 of 11</p>
          </div>
         </div>  
        

       </div>
</div>
 <!-- <div  v-else class="container text-center mt-4  rounded no-content-wrapper">
       <div  class=" text-center p-5 rounded" :class="backgroundMode">
         <h1>No contents yet  &#x1F554;</h1>
       </div>
 </div> -->

</template>


<script>
import TiptapCompositionApi from '../components/TiptapCompositionApi.vue';
import setName from "../composibles/setName"
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
import { onMounted, onUpdated } from "vue"
import { ref } from 'vue'
import axios from 'axios';

export default {
  setup(){
    const store = useStore()

    const Likes = ref([0])
    const postId = ref('')
    const commentId = ref('')

    //Opens post editor
    const postEditorOpen = () =>{
      store.commit('postBtnState', true)
    }
   
    //Gets the current post id saves in store and opens comment editor
    const commentEditorOpen = (id) =>{
      store.commit('setCommentBtnState', true)
      store.commit('setPostId', id)
    }

    const getLikesCount = computed(() => store.getters.getLikesCount ) 
    const incrementLikes = () => store.dispatch('asyncIncrementLikes') 
    const backgroundMode = computed(()=> store.getters.getBackgroundMode)
    
   
    const postLoader = computed(()=> store.getters.getPostLoaderState)
    const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)

    const authUser = computed(()=> store.getters.getAuthUser)

    const posts = computed(()=> store.getters.getPost)
    //const filtered = computed(()=> posts.value.map(item => item));
     const getLikes = computed(() => store.getters.getLikes ) //not used yet


    const like = (id) => {
      postId.value = id
      store.dispatch("likePost",id)
      .then(respons=>{
         postId.value = ''
      }).catch(error=>{
         console.log(error)
      })
    } 

    const likeComment = (id) => {
      commentId.value = id
      store.dispatch("likeComment",id)
      .then(respons=>{
        commentId.value = ''
      }).catch(error=>{
         console.log(error)
      })
    } 

   

    return { 
      getLikes,
      like,
      Likes,
      incrementLikes,
      postEditorOpen,
      backgroundMode, 
      backgroundModeParent, 
      posts,
      postLoader,
      authUser ,
      postId,
      commentId,
      commentEditorOpen,
      likeComment
    }

    // const { Myname, changeName } = setName()
    // return { Myname, changeName }
  },
  components:{ TiptapCompositionApi }
}
</script>

<style scoped>

.reply-wrapper{
  height: 36px;
}
.replies{
 font-weight: lighter;
}
.spinner-border-2{
  height: 20px;
  width: 20px;
  margin-top: 2px;
}

.add-comment{
  height: 35px;
  cursor: pointer;
}
.comment-footer{
   margin-top: 10px;
   margin-bottom: 7px;
   font-size: 13px;
   cursor: pointer;
}

.comment-footer .text-1{
  font-weight: bolder;
}
.comment-container{
  margin: auto;
  padding: 0px;
}
.comment-reaction-wrapper{
  font-size: 15px;
  margin-left: 35px;
  margin-top: 2px;
  cursor: pointer;
  font-weight: bold;
}
.comment-wrapper{
  font-size: 15px;
  border-radius: 15px !important;
  width: fit-content;
  height: fit-content;
  max-width: 270px;
  border: solid 1px #ecf3fa ;
}

.comment-wrapper:hover{
  border: solid 1px rgb(61, 80, 255);
}

.comment-wrapper .user-name{
  font-weight:bolder;
  font-size: 12px;
}
.spinner-grow-1{
  height: 20px;
  width:20px;
  margin-top:2px;
}
.comment-img{
  height: 35px;
  width: auto;
}

.replies-img{
  height: 22px;
  width: auto;
  margin-top: 2px;
}

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
  height: 40px;
  margin-top: 7px;
  background-color: #eeeeee !important;
  cursor:pointer;
}

.post-div p{
  font-size: 18px;
  margin-top: 12px;
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
    margin-top: 100px !important;
  }

@media(max-width:765px) {
  .status1{
    display: none;
  }
}

@media(max-width:765px) {
  .card{
    border-radius: 0px;
    box-shadow: 0px 0px 0px 0px transparent;
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
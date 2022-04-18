<template>
    <div class="con1 status2 col-md-5 container" :class="backgroundMode">
    <div class="row" :class="backgroundMode">
    <div class="box-shadow p-0 m-0" :class="backgroundMode">
   <div class="card-header  border-bottom d-flex  d-xl-flex justify-content-between p-0 m-0 p-2" :class="backgroundMode">
      <a class="text-reset ms-3" href="#">
        <i class="fa fa-home text-primary"></i>
      </a>

       <a class="text-reset" href="#">
        <i class="fa fa-user-group"></i>
      </a>

       <a class="text-reset" href="#">
       <i class="fa-brands fa-facebook-messenger"></i>
      </a>
       <a class="text-reset" href="#">
        <i class="mdi mdi-bell"></i>
      </a>
       <a class="text-reset me-3" href="#">
       <i class="fa fa-users"></i>
      </a>
          </div>
         
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3" :class="backgroundMode">
                  <div class="preview-list col-11">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                         </div>
                        </div>
                        <div class="col-11 preview-item-content d-flex">
                         
                          <div @click="postEditorOpen" class="post-div col-10 bg-light">
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
         
          <div class="card-footer  py-3 border-top" :class="backgroundMode" style="border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="footer-div">
                        <i class="fa fa-smile text-warning mt-1 me-1"></i>
                        <span class="">Feeling</span>
                    </div>
                 </div>
                 <div class="col-4 border-start border-end">
                     <div class="footer-div">
                      <i class="fa-solid fa-images text-primary mt-1 me-1"></i>
                      <span>Photo/video</span>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="d-flex  footer-div">
                      <i class="fa fa-location-dot text-danger mt-1 me-1"></i>
                      <span>Location</span>
                    </div>
                 </div>
               </div>
          </div>
       </div>
      </div>
    </div>
</template>

<script>
import { useStore } from "vuex"
import { computed } from "@vue/reactivity"
export default {
  setup(){
    const store = useStore()
    const postEditorOpen = () =>{
      store.commit('postBtnState', true)
    }
    const backgroundMode = computed(()=> store.getters.getBackgroundMode) 
    return{postEditorOpen, backgroundMode }
  }
}
</script>

<style scoped>
.post-div{
  border-radius: 50px;
  background-color: #ecf3fa !important;
  cursor:pointer
}

.post-div p{
  font-size: 15px;
  margin-top: 21px;
}

.status2{
    display: none;
  }

@media(max-width:765px) {
  .status2{
    display: block;
  }
}
.con1{
 margin-top: 90px;
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

 
.card-footer{
  box-shadow: 0px 0px 0px 0px #222 !important;
}



@media(max-width:763px) {
.con1{
 margin-top: 50px;
 }
}

</style>
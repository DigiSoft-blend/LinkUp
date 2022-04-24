

<template>
       <div v-if="commentBtnState" class="row d-row">
           <div class="col-md-5  card-wrapper">
              <div class="card" :class="backgroundMode">
                <div class="card-header d-flex  justify-content-center  m-0 p-0" :class="backgroundMode">
                   <p class="text-middle  my-3" :class="backgroundMode">Add a comment &#x1F554;</p>
                    <p @click="commentEditorClose"  class="text-end"><i class="mdi mdi-close-circle px-3"></i></p>
                </div>
                <div class="card-body  p-0 m-0">
                  <EditorComponent></EditorComponent>
                </div>
              </div>
           </div> 
       </div>
</template>


<script>
import EditorComponent from './EditorComponent.vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
export default {
  setup(){

   const store = useStore()
      
      //gets the current state of post editor close/open button
      const commentBtnState = computed(()=> store.getters.getCommentBtnState)

      //closes post editor window 
      const commentEditorClose = () =>{
       store.commit('setCommentBtnState', false)
      }
      //sets backgroundMode dark  or light
      const backgroundMode = computed(()=> store.getters.getBackgroundMode) 

      const authUser = computed(()=> store.getters.getAuthUser)

      return { commentBtnState, backgroundMode, authUser , commentEditorClose}
  },
  components:{
    EditorComponent
  }  
}
</script>

<style scoped>


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
  /* display: flex;
  justify-content: center; */
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
  justify-content:center;
  z-index: 9999999;
  margin: 0;
  padding: 0;
  background: rgba(77, 77, 77, 0.61) !important;
}

.card-wrapper{
  position: fixed;
  top: 400px;
}

@media(max-width: 765px){
 .card-wrapper{
   margin: 0;
   padding: 0;
 }
}

@media(max-width: 765px){
 .card{
  top:0;
  border-radius: 0px;
 }
}



</style>
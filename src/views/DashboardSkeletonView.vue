<template>
  <div class="container-fluid page-body" :class="backgroundModeParent">

  <div class="row">
  <div class="col-md-12">
    <TopNavComponent></TopNavComponent>
  </div>
 </div>

   

<div class="row"  :class="backgroundModeParent">
   <nav id="mySidenav" class="col-md-3 sidebar-left p-4 d-md-block mt-5" :class="backgroundModeParent">
      <div class="position-sticky nav-div">
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item">
           
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name animated-background"> </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                 </div>
           
          </li>

        <li class="nav-item mx-3">
         <bullet-list-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </bullet-list-loader>  
        </li>  

        </ul>
        <hr>
       
        <ul class="nav flex-column  nav-pills list-unstyled">
            <li class="nav-item mx-3">
            <bullet-list-loader 
            :speed="1"
            :animation="true"
             primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </bullet-list-loader> 
          </li>
          <li class="nav-item mx-3">
            <bullet-list-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </bullet-list-loader>  
          </li>

          <li class="nav-item mx-3">
            <bullet-list-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </bullet-list-loader> 
          </li>
        </ul>
      </div>
    </nav> 


    <nav id="sidebarMenu" class="col-md-3 sidebar-right py-3 d-md-block  collapse" :class="backgroundModeParent">
      <div class="position-sticky mt-5">
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item mx-5">
             <div class="preview-list mx-3">
                      <div class="preview-item">
                        <div class="">
                        <div class="preview-thumbnail">
                          <img src="" alt="image" class="rounded-circle animated-background" />
                          <!-- <div class="active"></div> -->
                          </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between mt-2">
                              <h6 class="preview-subject p-user-name  animated-background"> </h6>
                            </div>
                            <p class="p-trending-post animated-background"></p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
       </ul>

      </div>
    </nav> 

<div class="row m-0 p-0">
     <div class="con1 status2 col-md-5 container" :class="backgroundModeParent" style="border:none">
    <div class="row">
    <div class="card box-shadow p-0 m-0">
   <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 p-2" :class="backgroundModeParent">
       <facebook-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </facebook-loader>
   </div>
         
          <div class="card-footer  py-3 border-top" :class="backgroundModeParent" style="border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="footer-div">
                        <!-- <i class="fa fa-smile text-warning mt-1 me-1"></i> -->
                        <span class="animated-background"></span>
                    </div>
                 </div>
                 <div class="col-4">
                     <div class="footer-div">
                      <!-- <i class="fa-solid fa-images text-primary mt-1 me-1"></i> -->
                      <span class="animated-background"></span>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="d-flex  footer-div">
                      <!-- <i class="fa fa-location-dot text-danger mt-1 me-1"></i> -->
                      <span class="animated-background"></span>
                    </div>
                 </div>
               </div>
          </div>
       </div>
      </div>
    </div>
  </div>    


<div class="row  m-0 p-0" :class="backgroundModeParent">
  <div class="col-md-6 md-4  container status-con1 p-0">
<div class="container-fluid  d-flex justify-content-center m-0 p-0">
  <div :class="backgroundModeParent" style="border:none">
                <div class="container content p-3 m-0">
                  
                <div class="col-md-3 col-4 main-staus-con animated-background   m-r">
                    
                </div>

                <div class="col-md-3 col-4 main-staus-con animated-background rounded  m-r">
                          
                </div>

                <div class="col-md-3 col-4 main-staus-con animated-background  rounded  m-r">
                      
                </div>

                <div class="col-md-3 col-4 main-staus-con animated-background rounded  m-r">
                        
                </div>

                </div>
         </div>
       </div> 
    </div>
</div>
 
  <div class=" col-md-5  container" :class="backgroundModeParent">
    <div class="row content gy-2">

        <div class="card mt-4 border" :class="backgroundModeParent">
        <div class="card-body py-3 px-0">
          <facebook-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </facebook-loader>
        </div>
      </div>


      <div class="card mt-4 border" :class="backgroundModeParent">
        <div class="card-body py-3 px-0">
          <facebook-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </facebook-loader>
           <content-loader 
            :speed="1"
            :animation="true"
             primaryColor="black"
            secondaryColor="#224"
          >
          </content-loader>
        </div>
      </div>


      <div class="card mt-4 border" :class="backgroundModeParent">
        <div class="card-body py-3 px-0">
          <facebook-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
            class="fb-loader"
          >
          </facebook-loader>
           <content-loader 
            :speed="1"
            :animation="true"
            primaryColor="black"
            secondaryColor="#224"
          >
          </content-loader>
        </div>
      </div>
      
      
    </div>
  </div>



    </div>
  </div>
</template>

<script>
import TopNavComponent from '../components/TopNavComponent.vue';
import { FacebookLoader } from 'vue-content-loader';
import { InstagramLoader } from 'vue-content-loader';
import { ContentLoader } from 'vue-content-loader';
import { BulletListLoader } from 'vue-content-loader';

import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default {
  setup(){
    const store = useStore()
   const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)
    return{ backgroundModeParent }
  },
  components:{ 
    TopNavComponent,
    FacebookLoader,
    InstagramLoader,
    ContentLoader,
    BulletListLoader 
  }
}
</script>

<style scoped>

.footer-div span {
  height: 5px;
  width: 40px;
}

@keyframes placeHolderShimmer {
  0%{
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
}

.animated-background{
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background-color: white;
  background: linear-gradient(to right, black 8%, #224 18%, black 33%);
  background-size: 800px 104px;
  position: relative;
}






.content-loader{
  animation: pulse-bg 1s infinite;
}
.fb-loader{
  height: 100px;
}

.ins-loader{
  height: 50%;
  width: auto;
}
.preview-thumbnail img {
  padding-top: 100%;
  width: 52px;
  float:left;
  border-radius: 50%;
  overflow: hidden;
}

.card-title{
   animation: pulse-bg 1s infinite;
   border-radius: 2px;
   height: 20px;
   width: 130px;
} 


.p-share{
  animation: pulse-bg 1s infinite;
  border-radius: 2px;
  height: 20px;
  width: 50px;
}

.p-view-all{
  animation: pulse-bg 1s infinite;
  border-radius: 2px;
  height: 20px;
  width: 60px;
}

.p-trending-post{
  border-radius:5px;
  height: 8px;
  width: 150px;
}

.p-sidbar-text{
  animation: pulse-bg 1s infinite;
  border-radius: 1px;
  height: 20px;
  width: 170px;
}

.p-card-header{
  animation: pulse-bg 1s infinite;
  border-radius: 1px;
  height: 16px;
  width: 230px;
}

.p-user-name{
  border-radius: 5px;
  height: 14px;
  width: 100px;
}

.p-card-body{
  animation: pulse-bg 1s infinite;
  border-radius: 1px;
  height: 23px;
  width: 200px;
}

.p-see-all{
  animation: pulse-bg 1s infinite;
  border-radius: 1px;
  height: 23px;
  width: 100px;
}


.sidebar-left .nav-link{
  animation: pulse-bg 1s infinite;
  border-radius: 1px;
  height: 30px;
  margin-top: 10px;
 } 


@keyframes pulse-bg {
    0% {
       background-color: #eee;

    }
    50% {
       background-color: #b6b3b3
    }
    100%{
       background-color: #eee;
    }
}


.status-con1{
    margin-top: 80px;
}

@media(max-width:765px){
  .status-con1{
    margin-top: 0px; 
}  
}
.main-staus-con{
min-height: 150px;  
min-width: 150px;  
background-color: white;
border: none;
border-radius: 10px !important;
box-shadow: 0px 1px 2px 0px #b7b8b9e0;
}

@media(max-width:1000px){
.main-staus-con{
min-height: 150px;  
min-width: 80px;  
background-color: white;
border: none;
border-radius: 10px !important;
box-shadow: 0px 1px 2px 0px #b7b8b9e0;
}
}

/* @media(min-width:725px){
.main-staus-con{
min-height: 150px;  
min-width: 80px;  
background-color: white;
border: none;
border-radius: 10px !important;
box-shadow: 0px 1px 2px 0px #b7b8b9e0;
}
} */

.status-con{
  position: relative;
}

.status-con .username{
  position: absolute;
  top:110px;
  left: 10px;
  font-size: 13px;
}

@media(max-width:394px) {
  .status-con .username{
  position: absolute;
  top:110px;
  left: 10px;
  font-size: 10px;
}
}
.preview-thumb{
  position:absolute;
  background-color: blueviolet !important;
  border-radius: 100%;
  top: 10px;
  left: 10px;
}

.preview-thumb img{
  width: 35px !important;
  border: solid 3px rgb(0, 125, 228);
}
 .container{
  display:flex; 
  overflow-x:auto;
 }

.container ::-webkit-scrollbar{
  display: none;
}

.container .m-r{
  margin-right: 5px;
}

.img-con{
  border-radius: 10px !important;
}

.img-fluid{
  height: 150px !important;
  width:auto !important;
  border-radius: 10px !important;
  /* border: solid 2px white !important; */
}
img:hover{ 
 border: solid 0px white !important;
 transition: 0.1s;
}

img ::after {
  transition: 1s !important; 
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

@media(max-width:763px) {
.con1{
 margin-top: 50px;
 }
}

</style>


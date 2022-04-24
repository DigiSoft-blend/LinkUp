<template>

<div class="col-md-6 md-4  container status-con1 p-0">
<div class="container-fluid content d-flex justify-content-center m-0 p-0">
  <div :class="backgroundModeParent" style="border:none">
                <div class="container content p-3 m-0">
                    <div class="col-md-3 col-4 main-staus-con  rounded m-r">
                    
                      <div class="status-con d-flex justify-content-center">
                      
                          <div class="preview-thumb">
                            <img src="/assets/images/faces/face10.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                          
                          <p class="username text-light">Mark zeganzu</p>
                        
                      <img src="/cars/33120.jpg" class="img-fluid rounded" alt="...">
                      </div>
                    
                  </div>
                    <div class="col-md-3 col-4 main-staus-con  rounded  m-r">
                    
                        <div class="status-con d-flex justify-content-center ">
                          <div class="preview-thumb">
                            <img src="/assets/images/faces/face1.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                           <p class="username text-light">Melinda Cruise</p>
                          <img src="/cars/33120.jpg" class="img-fluid rounded" alt="...">
                        </div>
                    
                  </div>
                    <div class="col-md-3 col-4 main-staus-con   rounded  m-r">
                      
                        <div class="status-con d-flex justify-content-center">
                          <div class="preview-thumb">
                            <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                           <p class="username text-light">Johny Drill</p>
                          <img src="/cars/33120.jpg" class="img-fluid rounded" alt="...">
                        </div>
                      
                  </div>
                  <div class="col-md-3 col-4 main-staus-con  rounded  m-r">
                      
                      <div class="status-con d-flex justify-content-center">
                        <div class="preview-thumb">
                            <img src="/assets/images/faces/face8.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                           <p class="username text-light">Stephanie Roberto</p>
                        <img src="/cars/33120.jpg" class="img-fluid rounded" alt="..." height="200px">
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
    const backgroundModeParent = computed(()=> store.getters.getBackgroundModeParent)
    return { backgroundModeParent }
  }
}
</script>

<style scoped>

.status-con1{
    margin-top: 80px;
}

@media(max-width:765px){
  .status-con1{
    margin-top: 0px; 
}  
}
.main-staus-con{
/* min-height: 150px;   */
/* min-width: 150px;   */
background-color: white;
border: none;
border-radius: 10px !important;
box-shadow: 0px 1px 2px 0px #b7b8b9e0;
}

.status-con{
  position: relative;
  border-radius: 10px !important;
  overflow: hidden;
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
  width: 38px !important;
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
}
.status-con img:hover{ 
 transition: 1s;
 transform: scale(1.1);
}


</style>
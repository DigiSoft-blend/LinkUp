<template>

<div class="col-md-6 container status-con1 mb-3">
<div class="row content">
  <div class="bg-light" style="border:none;">
                <div class="container p-3 m-0">
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
                          <img src="/cars/33119.jpg" class="img-fluid rounded" alt="...">
                        </div>
                    
                  </div>
                    <div class="col-md-3 col-4 main-staus-con   rounded  m-r">
                      
                        <div class="status-con d-flex justify-content-center">
                          <div class="preview-thumb">
                            <img src="/assets/images/faces/face4.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                           <p class="username text-light">Johny Drill</p>
                          <img src="/cars/33118.jpg" class="img-fluid rounded" alt="...">
                        </div>
                      
                  </div>
                  <div class="col-md-3 col-4 main-staus-con  rounded  m-r">
                      
                      <div class="status-con d-flex justify-content-center">
                        <div class="preview-thumb">
                            <img src="/assets/images/faces/face8.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                          </div>
                           <p class="username text-light">Stephanie Roberto</p>
                        <img src="/cars/33117.jpg" class="img-fluid rounded" alt="..." height="200px">
                      </div>
                      
                  </div>

                </div>
         </div>
       </div> 
    </div>
  
</template>

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

</style>
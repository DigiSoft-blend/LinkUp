<template>
    <div class="con1 status2 col-md-5 container bg-light">
    <div class="row">
    <div class="card text-dark box-shadow p-0 m-0">
   <div class="card-header  border border-bottom d-flex  d-xl-flex justify-content-between p-0 m-0 p-2">
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
         
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3">
                  <div class="preview-list">
                      <div class="preview-item">
                         <div class="img-div">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face2.jpg" alt="image" class="rounded-circle" />
                         </div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <form action="">
                              <div class="md-12">
                                 <input class="form-control inp" type="text" placeholder="What's on your mind, Silas?">
                              </div>
                          </form>
                          <div>
                             <i class="fa fa-file-image mt-2 ms-3 text-danger" style="font-size:30px"></i>
                             <p class="ms-2 mt-1 mb-0">Photo</p>
                          </div>
                        </div>
                        
                      </div>
                 </div>
          </div>
         
          <div class="card-footer  py-3 border-top" style="background-color:white; border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="footer-div">
                        <i class="fa fa-smile text-warning mt-1 me-1"></i>
                        <span class="">Feeling</span>
                    </div>
                 </div>
                 <div class="col-4">
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


<style scoped>
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
     width: 440px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }

 
@media(max-width:360px) {
  .preview-item-content input{
     width: 250px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }
}  

@media(min-width:393px) {
  .preview-item-content input{
     width: 247px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }
}  

@media(max-width:390px) {
  .preview-item-content input{
     width: 210px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }
} 



@media(max-width:763px) {
.con1{
 margin-top: 50px;
 }
}

</style>
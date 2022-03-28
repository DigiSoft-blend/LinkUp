<template>
    <div class="con1 status2 col-md-5 container bg-light">
    <div class="row">
    <div class="card text-dark box-shadow p-0 m-0">
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
                        </div>
                      </div>
                 </div>
          </div>
         
          <div class="card-footer  py-3 border-top" style="background-color:white; border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="col-12 footer-div">
                      <i class="mdi mdi-camcorder text-danger"></i>
                      <p>Live video</p>
                    </div>
                 </div>
                 <div class="col-4">
                     <div class="col-12 footer-div">
                      <i class="mdi mdi-image-multiple text-primary"></i>
                      <p>Photo/video</p>
                     </div>
                 </div>
                 <div class="col-4">
                    <div class="col-12 footer-div">
                        <i class="mdi mdi-chart-bubble text-warning"></i>
                        <p class="">Feeling/activity</p>
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
     width: 270px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }
}  

@media(min-width:393px) {
  .preview-item-content input{
     width: 300px;
     height: 40px;
     border-radius: 50px;
     border: none !important;
     background-color: #ecf3fa;
     margin-top: 7px;
  }
}  

@media(max-width:390px) {
  .preview-item-content input{
     width: 270px;
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
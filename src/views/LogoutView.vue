<template>
  <div class="container-fluid page-body bg-light">

<div class="row">

  <div class="col-md-12  bg-secondary">
    <div class="fixed-top p-0 ">
     <nav class="navbar navbar-expand-lg navbar-light" aria-label="Eleventh navbar example" style="background-color:white">
      <div class="container-fluid">
        <img class="logo" src="/logo/logo.png" alt="logo" height="50px" width="270px" />
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->

         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        
        <div class="collapse navbar-collapse" id="navbarsExample09">
          <form style="margin-left:43px">
             <div class="search">
               <input class="nav-form-input form-control" type="text" placeholder="Search" aria-label="Search">
               <i class="mdi mdi-magnify icon"></i> 
             </div>
          </form>
            <button class="btn btn-transparent border mx-4" type="button">log in</button>
            <button class="btn btn-primary" type="button" >sign up</button>
             
        </div>  
      </div>
    </nav>
   </div>
  </div>
 </div>

    <div class="row">
               
    <nav id="sidebarMenu" class="col-md-3 sidebar-left p-4 d-md-block bg-light">
      <div class="position-sticky pt-5">
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item mb-3">
            <a class="nav-link active" aria-current="page" href="#">
             <span class="mdi mdi-home nav-icon" ></span>
              Home
            </a>
            <a class="nav-link" aria-current="page" href="#">
              <span class="mdi mdi-account nav-icon" ></span>
              Members
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
             <span class="" >&#x1F354;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
             <span class="" >&#x1F624;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="" >&#x1F594;</span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span >Saved reports</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
           <span class="" >&#x2F354;</span>
          </a>
        </h6>
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item">
            <a class="nav-link" href="#">
               <span class="" >&#x1F554;</span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav> 

    
 

  <nav id="sidebarMenu" class="col-md-3 sidebar-right p-4 d-md-block bg-light collapse">
      <div class="position-sticky pt-5">
       <ul class="nav flex-column mb-auto p-4 box-shadow" style="background:white;">
          <li class="nav-item">
            <p class="Trend-text px-1 text-muted p-trending-post">Trending Posts</p>
                 <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Leonard</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
          </li>
          <li class="nav-item">
              <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                          <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Leonard</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                </div>
          </li>
          <li class="nav-item">
             <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                          <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Leonard</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Well, it seems to be working now.</p>
                          </div>
                        </div>
                     </div>
             </div>
          </li>
          
          <li class="nav-item">
              <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                          <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Leonard</h6>
                            </div>
                            <p class="text-muted p-sidbar-text">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                </div>
          </li>

          <li class="nav-item px-2">
            <p class="text-muted text-muted p-see-all">See all</p>
          </li>
        </ul>
      </div>
    </nav> 

 
  <div class="main-view col-md-6  container bg-light">
    <div class="row content gy-2">

      <div class="card bg-light p-0 m-0  px-3">
        <div class="card-body bg-light p-0 m-0">
          <div class="d-flex flex-row justify-content-between mt-3">
            <h4 class="card-title">Home</h4>
            <ul class="ul-list mx-2 list-inline">
              <li class="list-inline-item"><p class="text-muted mb-1 small p-view-all p-1">Latest</p> </li>
              <li class="list-inline-item"><i class="mdi mdi-chevron-down ul-list-icon"></i></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card text-dark mb-2 box-shadow p-0 m-0">
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3">
                  <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle status" />
                          <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Silas Udofia</h6>
                            </div>
                             <span class="badge rounded-pill bg-primary">Admin</span>
                             <span class="mx-1 badge rounded-pill bg-primary">now</span>
                            <p class="text-muted p-card-header mt-2">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1">Share</p>
          </div>
          <div class="card-body m-0 p-0">
            <div class="mx-3">
               <p class="p-card-body">hello there</p>
            </div>
             <div class="d-flex justify-content-center py-1">
                <img src="/assets/images/carousel\banner_6.jpg" class="img-fluid" alt="...">
             </div>
          </div>
          <div class="card-footer mt-4 py-3 border-top" style="background-color:white; border:none">
               <div class="row row-footer">
                 <div class="col-4">
                    <div class="col-12 footer-div">
                      <i class="mdi mdi-thumb-up-outline"></i>
                      <p>7m</p>
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


       <div class="card text-dark mt-3 box-shadow p-0 m-0">
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3">
                  <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                         <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Silas Udofia</h6>
                            </div>
                            <span class="badge rounded-pill bg-primary">5 days ago</span>
                            <p class="text-muted p-card-header mt-2">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1">Share</p>
          </div>
          <div class="card-body m-0 p-0">
             <div class="mx-3">
               <p class="p-card-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus tenetur ab odio adipisci nihil recusandae. Nobis fuga minus excepturi quae tenetur rem aperiam accusamus amet ex possimus? Consectetur, debitis corporis.</p>
             </div>
              <div class="d-flex justify-content-center py-1">
                 <img src="/assets/images/carousel\banner_7.jpg" class="img-fluid" alt="...">
              </div>
          </div>
          <div class="card-footer mt-4 py-3 border-top" style="background-color:white; border:none">
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


<div class="card text-dark mt-4 box-shadow p-0 m-0">
            <div class="card-header  d-flex  d-xl-flex justify-content-between p-0 m-0 px-3">
                  <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                         <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Silas Udofia</h6>
                            </div>
                            <span class="badge rounded-pill bg-primary">3 days ago</span>
                            <p class="text-muted p-card-header mt-2">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1">Share</p>
          </div>
          <div class="card-body m-0 p-0">
            <div class="mx-3">
               <p class="p-card-body">fun filled place, really had lots of fun here</p>
            </div>
             <div class="d-flex justify-content-center py-1">
               <img src="/assets/images/carousel\banner_8.jpg" class="img-fluid" alt="...">
             </div>
          </div>
          <div class="card-footer mt-4 py-3 border-top" style="background-color:white; border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="col-12 footer-div">
                      <i class="mdi mdi-thumb-up-outline"></i>
                      <p>20k</p>
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
      
 <div class="card text-dark mt-4 p-0 m-0">
            <div class="card-header  d-flex  d-xl-flex justify-content-between">
                  <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="/assets/images/faces/face6.jpg" alt="image" class="rounded-circle" />
                         <div class="active"></div>
                        </div>
                        <div class="preview-item-content d-flex flex-grow">
                          <div class="flex-grow">
                            <div class="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 class="preview-subject p-user-name">Silas Udofia</h6>
                            </div>
                            <span class="badge rounded-pill bg-primary">2 days ago</span>
                            <p class="text-muted p-card-header mt-2">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                 </div>
                  <p class="text-muted mt-2 small p-share p-1">Share</p>
          </div>
          <div class="card-body m-0 p-0">
            <div class="mx-3">
              <p class="p-card-body">Nature is amazing</p>
            </div>
            <div class="d-flex justify-content-center py-1">
               <img src="/assets/images/carousel\banner_4.jpg" class="img-fluid" alt="...">
            </div>
          </div>
          <div class="card-footer mt-4 py-3 border-top" style="background-color:white; border:none">
               <div class="row row-footer">
                  <div class="col-4">
                    <div class="col-12 footer-div">
                      <i class="mdi mdi-thumb-up-outline"></i>
                      <p>3k</p>
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
     </div>
    </div>

    <div class="container">
   <div class="offcanvas offcanvas-start  w-50 h-50 bg-light" tabindex="-4" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div class="offcanvas-header">
        <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas"><strong>Menu</strong></h6>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body  p-0 m-0">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
           
           
            <li>
                <a href="#" class="nav-link text-truncate">
                 <span class="ms-1 d-none d-sm-inline">Products</span>
                 </a>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                 <span class="ms-1 d-none d-sm-inline">Customers</span> 
                 </a>
            </li>
        </ul>
    </div>
 </div>

 </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const loadUserData = async() => {
    return new Promise((resolve => {
        setTimeout(() => {
          resolve({
            name: 'silas udofia',
            pic: 'assets/images/faces/face6.jpg',
            bio: 'vue js developer'
          })
        },2000)
    }))
}
export default {
   async setup(){
     const userData = ref(await loadUserData())
     return {
      userData
     }
   }
}
</script>

<style>

.time-text{
    padding-top:3px;
}

.row-footer{
    color: rgb(158, 157, 157);
}

.footer-div{
  border-radius: 30px;
  justify-content: center;
  height: 24px;
  display:flex;
}


.ul-list{
   position: relative;
}

.ul-list .ul-list-icon{
 position: absolute;
 top: 4px;
 left: 47px
}
.search {
    position: relative;
}

.search input {
    height: 45px;
    text-indent: 40px;
    border: 2px solid #d6d4d4
}



.search .icon {
    position: absolute;
    top: 11px;
    left: 20px
}


.nav-form-input{
  width: 676px !important;
  border: none !important;
  background-color: #ecf3fa;
}

@media( max-width: 400px){
    .logo{
        width: 190px;
        height: 40px;
    }
}

/* .page-body{
  background-color: #222 !important;

} */

.card{
   /* background-color: #222 !important; */
  background-color: white;
  border: none;
}
.card .card-header{
  /* background-color: #222 !important; */
  background-color: white;
  border: none;
}

 .sidebar-left{
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; 
  display: none;
 }

 .sidebar-right{
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
 }

.main-view{
  padding: 10px;
  min-height: 100vh;
}

.main-view .content {
  margin-top: 54px;
  justify-content: center;
  padding: 2px;
}


/* Preview */
.preview-list .preview-item {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  padding: 1rem 0rem;
  font-size: .875rem; }
  .preview-list .preview-item:last-child {
    border-bottom: 0; }
  .preview-list .preview-item .form-check {
    margin-top: 8px;
    margin-right: 1rem; }
  .preview-list .preview-item .preview-thumbnail {
    color: #ffffff;
    position: relative; }
    .preview-list .preview-item .preview-thumbnail img,
    .preview-list .preview-item .preview-thumbnail .preview-icon {
      width: 50px;
      height: 50px;
      text-align: center;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      }

     .preview-list .preview-item .preview-thumbnail .status {
       border: 3px solid rgb(92, 157, 255);
       padding: 2px;
     }

     .preview-list .preview-item .preview-thumbnail .active{
       height: 12px;
       width: 12px;
       background-color: rgb(99, 245, 94);
       border-radius: 100%;
       position: absolute;
       top: 37px;
       left: 34px;
       border: 1px solid transparent;
       padding: 1px;
       box-shadow: 0px 0px 1px 1px rgb(109, 108, 108);
     }

      .preview-list .preview-item .preview-thumbnail img i,
      .preview-list .preview-item .preview-thumbnail .preview-icon i {
        font-size: 1.125rem;
        margin: 0; }
    .preview-list .preview-item .preview-thumbnail .badge {
      border: 2px solid #ffffff;
      border-radius: 100%;
      bottom: 5px;
      display: block;
      height: 14px;
      left: -5px;
      padding: 0;
      position: absolute;
      width: 14px; }
  .preview-list .preview-item .preview-item-content {
    line-height: 1;
    padding-left: 15px; }
    .preview-list .preview-item .preview-item-content:first-child {
      padding-left: 0; }
    .preview-list .preview-item .preview-item-content p {
      margin-bottom: 10px;
      line-height: 1; }
      .preview-list .preview-item .preview-item-content p .content-category {
        font-family: 'source-sans-pro-semibold', sans-serif;
        padding-right: 15px;
        border-right: 1px solid #2c2e33; }
    .rtl .preview-list .preview-item .preview-item-content {
      padding-left: 0;
      padding-right: 1rem;
      margin-right: 0;
      margin-left: auto; }
  .preview-list .preview-item .preview-actions {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row; }
    .preview-list .preview-item .preview-actions i {
      width: 29px;
      color: #e6e9ed;
      height: 29px;
      border: 2px solid #e6e9ed;
      border-radius: 100%;
      padding: 3px 6px;
      display: inline-block; }
      .preview-list .preview-item .preview-actions i:first-child {
        margin-right: 10px; }

.preview-list.comment-preview .preview-item {
  padding: .87rem 0; }
  .preview-list.comment-preview .preview-item:first-child {
    padding-top: 0; }
  .preview-list.comment-preview .preview-item p {
    line-height: 27px; }

.preview-list.bordered .preview-item {
  border-bottom: 1px solid #2c2e33; }
  .preview-list.bordered .preview-item:last-child {
    border-bottom: 0; }


</style>
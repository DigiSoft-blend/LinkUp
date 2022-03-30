<template>
  <div class="fixed-top">
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
  <!-- Container wrapper -->
   
    <!-- Toggle button -->
    
     <img class="navbar-brand small-screen-logo mx-2" src="/fblogo/facebook-logo-png-38355.png" alt="logo"/>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
       <img class="navbar-brand logo mx-4" src="/fblogo/facebook-logo-png-2336.png" alt="logo" />

          <form style="">
             <div class="search">
               <input class="nav-form-input form-control" type="text" placeholder="Search Link up" aria-label="Search">
               <i class="mdi mdi-magnify icon"></i> 
             </div>
          </form>
      <!-- Left links -->
      <div class="link-div active">
         <router-link class="nav-link mdi mdi-home nav-icon" to="/userdashboard"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link  mdi mdi-account-multiple-outline nav-icon" to="/userdashboard"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link mdi mdi-email-variant nav-icon" to="/userdashboard"></router-link>
      </div>
       <div class="link-div">
         <router-link class="nav-link mdi mdi-earth nav-icon" to="/userdashboard"></router-link>
      </div>

    </div>
    <!-- Collapsible wrapper -->

    <div class="collapse navbar-collapse justify-content-end">
       
        <!-- Avatar -->
      <div class="dropdown me-3">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/assets/images/faces/face2.jpg"
            class="rounded-circle"
            height="40"
            alt="img"
            loading="lazy"
          />
          <span class="ms-2 text-dark">Silas</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <router-link class="dropdown-item" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>

       <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-plus iconn"></i>
      </a>

       <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-message iconn"></i>
      </a>

       <a class="text-reset me-2 nav-icon2" href="#">
        <i class="mdi mdi-bell iconn"></i>
      </a>
       <a class="text-reset nav-icon2" href="#">
        <i class="mdi mdi-pocket iconn"></i>
      </a>
    </div>
 
    <!-- Right elements -->
    <div class="d-flex align-items-center mx-3">
      <!-- Icon -->
    
      <!-- Notifications -->
      <!-- <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="nav-icon2 mdi mdi-bell-ring"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div> -->
      <!-- Avatar -->
      <!-- <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="/assets/images/faces/face2.jpg"
            class="rounded-circle"
            height="40"
            alt="img"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <router-link class="dropdown-item" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div> -->
    </div>
    <!-- Right elements -->
  <!-- </div> -->
  <!-- Container wrapper -->
    <button class="navbar-toggler" type="button">
      <i class="mdi mdi-menu" onclick="toggleSideNav()"></i>
    </button>
</nav>
<!-- Navbar -->
</div>
</template>

<style scoped>

.logo{
  width: 40px !important;
  height: auto !important;
}

.small-screen-logo{
   width: 130px !important;
  height: auto !important;
}
 .link-div{
   text-align: center;
   margin: 0px 37px 0px 20px;
   padding: 0;
 }

 .active{
   border-bottom: solid 4px rgb(0, 132, 255) !important;
   text-align: center;
   padding: 0;
  color: rgb(0, 132, 255);
 }

 .active .nav-icon{
   color: rgb(0, 132, 255);
 }

 .nav-icon{
   font-size: 25px;
   width: 91px;
   color: rgb(127, 128, 129);
 }

.nav-icon2{
  background-color: rgb(211, 211, 211);
  border-radius: 100%;
  padding: 6px;
  width: 41px;
  display: flex;
  justify-content: center;
 }

.nav-icon2 .iconn{
  margin-top: 2px;
  color: black;
} 
</style>

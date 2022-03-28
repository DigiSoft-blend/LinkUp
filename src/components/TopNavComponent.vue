<template>
  <div class="fixed-top">
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
   
    <!-- Toggle button -->
     <button class="navbar-toggler" type="button">
      <i class="mdi mdi-menu" onclick="toggleSideNav()"></i>
    </button>

     <img class="navbar-brand small-screen-logo" src="/logo/logo.png" alt="logo"  height="40" width="130"/>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
       <img class="navbar-brand logo mx-4" src="/logo/logo.png" alt="logo" />

          <form style="margin-left:38px">
             <div class="search">
               <input class="nav-form-input form-control" type="text" placeholder="Search" aria-label="Search">
               <i class="mdi mdi-magnify icon"></i> 
             </div>
          </form>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center mx-3">
      <!-- Icon -->
      <a class="text-reset me-3" href="#">
        <i class="fas fa-message"></i>
      </a>

      <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
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
      </div>
      <!-- Avatar -->
      <div class="dropdown">
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
      </div>
    </div>
    <!-- Right elements -->
  <!-- </div> -->
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</div>
</template>



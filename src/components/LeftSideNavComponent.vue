<template>
    <nav id="mySidenav" class="col-md-3 sidebar-left p-4 d-md-block bg-light">
      <div class="position-sticky nav-div">
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="mb-3">
            <a class="nav-link active" aria-current="page" href="/login">
             <span class="mdi mdi-home nav-icon" ></span>
              Home
            </a>
            <a class="nav-link bg-light" aria-current="page" href="#">
              <span class="mdi mdi-account nav-icon" ></span>
              Members
            </a>
          </li>

      <li class="mb-1 nav-item nav-link bg-light">
        <a class="text-muted align-items-center rounded collapsed d-flex justify-content-between" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
        Marketplace
         <span class="mdi mdi-chevron-down" style="font-size:20px" ></span>
        </a>
        <div class="collapse show" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
             <li class="nav-item">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F454;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F524;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="mdi mdi-git" ></span>
              Integrations
            </a>
          </li>
        
          </ul>
        </div>
      </li>
      <li class="mb-1 nav-item nav-link bg-light">
        <a class="text-muted  align-items-center collapsed d-flex justify-content-between" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
         Services
          <span class="mdi mdi-chevron-down" style="font-size:20px" ></span>
        </a>
        <div class="collapse" id="dashboard-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
             <li class="nav-item">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F354;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F624;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="mdi mdi-web" ></span>
              Integrations
            </a>
          </li>
        
          </ul>
        </div>
      </li>


          <li class="nav-item bg-light">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F354;</span>
              Customers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
             <span class="" >&#x1F624;</span>
              Reports
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="mdi mdi-git" ></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span >Events</span>
          <a class="link-secondary" href="#" aria-label="Add a new report">
           <span class="mdi mdi-calendar" ></span>
          </a>
        </h6>
        <ul class="nav flex-column  nav-pills list-unstyled">
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
               <span class="" >&#x1F554;</span>
              Current month
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link bg-light" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
           <li class="nav-item">
            <a class="nav-link bg-light" href="#">
            <span class="" >&#x1F353;</span>
              Last quarter
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
              <span class="" >&#x1F324;</span>
              Social engagement
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link bg-light" href="#">
               <span class="" >&#x1F351;</span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav> 

</template>

<style scoped>
.nav-div{
  margin-top: 60px;
}
</style>
<template>
 
  <div class="row p-0 m-0">
     <Loader v-if="Loader" class="text-center"></Loader>
  <div class="col-md-6 text-dark">
         
     
    <div class="container sign-up-div mt-4  text-center">
      <img src="/logo/default-monochrome-black.svg" class="mt-4" alt="logo" />
    </div>

    <h3 class="fw-normal mt-4 mb-1 text-center p-0 animate__animated animate__fadeInLeft">Create an Account</h3>
  
      
  <main class="form-signin">
    
  <form @submit="signup">
   
      <div class="d-flex justify-content-center m-0 p-0">
        <i v-if="formVisible" @click="toggleBtn" class="mdi mdi-menu-up text-primary  text-center m-0 p-0" style="font-size:40px"></i> 
      </div>
     <section v-if="!formVisible"  class="animate__animated animate__fadeInLeft">
      
        <div class="search mb-3 ">
          <i class="mdi mdi-face  icon"></i>
          <input v-model="firstName" type="text" class="inp  input-field" placeholder="First Name" required > 
       </div>
    
    
      <div class="search mb-3" >
         <i class="mdi mdi-account  icon"></i> 
         <input v-model="lastName" type="text" class="inp  input-field" :class="formErrorName" placeholder="Last Name" required> 
        <p v-if="error.name != null" class="text-center text-danger" style="font-size:14px">{{ error.name[0] }} </p>
       </div>

      <div class="search mb-3">
         <i class="mdi mdi-email  icon" ></i> 
         <input v-model="email" type="email" class="inp  input-field"  :class="formErrorEmail" placeholder="Email Address" required> 
         <p v-if="error.email != null" class="text-center text-danger" style="font-size:14px">{{ error.email[0] }} </p>
       </div>
    
    
      <div class="search mb-3">
         <i class="mdi mdi-key  icon"></i>
          <input  v-model="password" type="password" class="inp  input-field" :class="formErrorPassword" placeholder="Choose a Password" required> 
       </div>

       <div class="search">
         <i class="mdi mdi-key icon"></i>
          <input v-model="password_confirmation" type="password" class="inp  input-field" :class="formErrorPassword" placeholder="Confirm Password" required> 
        <p v-if="error.password != null" class="text-center text-danger" style="font-size:14px">{{ error.password[0] }} </p>
       </div>

    
    <button  class="w-100 btn btn-lg btn-primary zbtn btn-grad mt-3" type="submit">Sign Up</button>
    <div class="text-center p-2">
       <span> Have an account ?</span> <router-link to="/login">Log in</router-link>
    </div>
  </section>  

 
  </form>
</main>

</div>
  
<div class="col-md-6  bimg  d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
         <router-link class="nav-link active a1" to="/register">Register</router-link>
         <router-link class="nav-link a1" to="/login">Login</router-link>
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
       <p style="font-size:24px">Join the club</p>
     <h1>Link up with millions of people</h1>
    </div>
    <p class="mt-4" > </p>
     <p class="mt-4">
     <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/login">login</router-link>
    </p>

  </div>
   
 
    </div>
    </div>
  </div>

 
</template>



<script>
import Loader from "./Loader.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import router from "../router";

export default {
  setup(){
     const store = useStore()
     const username = ref('')
     const email = ref('')
     const password = ref('')
     const password_confirmation = ref('')
     const firstName = ref('')
     const lastName = ref('')
     const formVisible = ref(false)
     const formErrorEmail = ref('')
     const formErrorPassword = ref('')
     const formErrorName = ref('')

     const signup = (e) => {
       e.preventDefault()
       store.dispatch('signUp',{
         name: firstName.value  +  " "  +  lastName.value,
         email: email.value,
         password: password.value,
         password_confirmation: password_confirmation.value
       }).then(response => {
         router.push("/registrationsuccess")
       }).catch(error => {
          const errorEmail = error.response.data.errors.email
          const errorPassword = error.response.data.errors.password
          const errorName = error.response.data.errors.name
          
          if(errorEmail != null){
            formErrorEmail.value = "form-error"
          }else{
            formErrorEmail.value = ""
          }

          if(errorPassword != null){
            formErrorPassword.value = "form-error"
          }else{
            formErrorPassword.value = ""
          }

          if(errorName != null){
            formErrorName.value = "form-error"
          }else{
            formErrorName.value = ""
          }
  
       })
     }
     
     const toggleBtn = () => {
       formVisible.value = !formVisible.value
     }

     const Loader = computed(() => store.getters.getLoader)
     const error = computed(() => store.getters.getRegistrationError)


     return{ 
       username,
       email,
       password,
       password_confirmation,
       firstName,
       lastName,
       formVisible, 
       toggleBtn,
       signup,
       Loader,
       error,
       formErrorEmail,
       formErrorPassword,
       formErrorName
      }

  },
   components: { Loader }
}
</script>



<style scoped>

.sign-up-div img{
  animation: squiz-in-out 3s linear infinite;
  height: auto;
  width: 220px;
  color: red !important;
}

@keyframes squiz-in-out {
    0% {
       transform: rotateX(0deg);
    }
    50% {
       transform: rotateX(45deg);
    } 
    100%{
       transform: rotateX(0deg);
    } 
}

.form-error{
  animation:  form-border-error 2s linear infinite;
}

@keyframes form-border-error {
    0% {
     color:  red;
    }
    50% {
     color: rgb(224, 221, 221);
    } 
    100%{
      color:  red;
    } 
}
.col-md-6{
  min-height: 100vh !important;
}
.diva{
   box-shadow: 0px 1px 3px 0px rgb(217, 219, 219);
   border-radius: 8px;
   justify-content: center;
   text-align: justify;
   margin-bottom: 10px !important;
   border-top: 2px solid rgb(182, 117, 243);
   width: 100%;
   max-width: 400px;
   padding: 15px;
   margin: auto;
   position: relative;
   
}

.p-diva{
  margin-left: 20px;
}

.diva .icond {
    position: absolute;
    top: 14px;
    left: 12px
}

.search {
    position: relative;
}
 .search input {
    height: 39px;
    text-indent: 40px;
}



.search .icon {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 10px;
}




.circle{
           width: 70px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
            border: none;
            font-weight: bolder !important;
            
}

.circle2{
           width: 70px;
            padding: 10px;
            background-color: rgb(24, 23, 23);
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            /* box-shadow: 0px 1px 5px 1px rgb(217, 219, 219); */
            border: none;
            font-weight: bolder !important;
            
}
.hight{
  height: 400px !important;
}


a{
 text-decoration: none;
 color: blueviolet;
}
.zbtn{
  border-radius: 50px;
  background-color: blueviolet;
  border: none !important;
}

.btnz2{
  border-radius: 50px;
  width: 200px;
}
.bimg{
  min-height: 100vh;
 background-image: url("/assets/images/samples/Banner_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.inp{
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 10px;
   border-bottom-right-radius: 10px;
  outline: none !important;
  border: none !important;
  background-color: rgb(241, 243, 243) !important;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}


  .input-icons i {
            position: absolute;
        }
          
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }

       
          
        .icon {
          width: 40px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 50px;
            margin: 2px;
            text-align: center;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
        }

        .icon2{
          width: 100px !important;
            padding: 10px;
            background-color: rgb(155, 153, 153);
            border-radius: 100%;
            max-width: 40px;
            margin: 10px;
            text-align: center;
            font-size: 13px;
            color: white;
        }
          
        .input-field {
            width: 100%;
            padding: 10px;
            /* text-align: center; */
            /* text-align: center; */
        }

        .a1{
          padding: 15px !important;
        }
          
        /* h2 {
            color: green;
        } */

        /*
 * Globals
 */


/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}


/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

</style>
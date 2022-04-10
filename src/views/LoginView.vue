<template>
  
  <div class="row p-0 m-0">
   <Loader v-if="Loader" class="text-center"></Loader> 
  <div class="col-md-6   text-dark">
    
    <div class="container sign-up-div  text-center">
      <img src="/logo/default-monochrome-black.svg" alt="logo" />
    </div>
 
   <main class="form-signin animate__animated animate__fadeInLeft">

  <form @submit="login">
   
    <p class="text-muted text-center mt-3">Get connected with everything !</p>

       <div class="search mb-3">
         <i class="mdi mdi-account icon"></i>
          <input v-model="email" type="email" class="inp bg-light input-field" placeholder="Email"> 
       </div>
    
    
      <div class="search">
         <i class="mdi mdi-key  icon"></i> 
         <input v-model="password" type="password" class="inp bg-light input-field" placeholder="Password" required> 
       </div>
    
      <p class="text-danger text-center mt-2">{{ error }}</p>
   

    <div class="text-muted mb-1 mt-2 d-flex justify-content-between pt-1">
      <label>
        <input type="checkbox" value="remember-me"> Remember 
      </label>
      <router-link to="/forgotpassword">
         <p>Lost Password ?</p>
      </router-link>
    </div>
    <button class="w-100 btn btn-lg zbtn btn-grad" type="submit">Sign in</button>
    <div class="text-center p-2">
       <router-link to="/register">Create an account</router-link> 
    </div>

  
  </form>
</main>

</div>
  
<div class="col-md-6 bimg d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
        <router-link class="nav-link active a1" to="/login">Login</router-link>
        <router-link class="nav-link a1" to="/register">Register</router-link>
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
      <p style="font-size:24px">Join the club</p>
     <h1>Link up with millions of people</h1>
    </div>
  
     <p class="mt-4">
      <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/register">Register</router-link>
    </p>

    
  </div>
   
</div>
    </div>
  </div>
</template>



<script>
import Loader from "./Loader.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";
import router from "../router";
export default {
   
setup(){

  const store = useStore()
  const email = ref('')
  const password = ref('')

 onMounted(()=> stopConfetti())

  const login = (e)=> {
    e.preventDefault()
    store.dispatch('login', {
      email: email.value,
      password: password.value
    }).then(response => {
      router.push("/userdashboard")
    }).catch(error => {
      console.log(error)
    })
  }

  const Loader = computed(() => store.getters.getLoader) 
  const error = computed(() => store.getters.getLoginError)

 return{email, password, login, Loader, error}
},
 components: { Loader }
}

</script>



<style scoped>

.p-absolute{
  position: absolute
}
.sign-up-div{
  margin-top: 100px;
}

.sign-up-div img{
  animation: squiz-in-out 3s linear infinite;
  height: auto;
  width: 220px;
  color: red !important;
}

.col-md-6{
  height: 100vh !important;
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
  height: 100vh;
  /* background-image: url("/logo/default.svg"); */
  background-image: url("/assets/images/samples/Banner_bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}



@keyframes pendulum {
    0% {
       /* background-color: #eee; */
       transform: rotateZ(0deg)
    }
     50% {
       transform: rotateZ(180deg)
    } 
    100%{
       transform: rotateZ(0deg)
    } 
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

@keyframes coin-flip-z {
    0% {
       transform: rotateZ(-360deg);
    }
    50% {
       transform: rotateZ(360deg);
    } 
    100%{
       transform: rotateZ(-360deg);
    } 
}

@keyframes coin-flip-x {
    0% {
       transform: rotateX(-360deg);
    }
    50% {
       transform: rotateX(360deg);
    } 
    100%{
       transform: rotateX(-360deg);
    } 
}

@keyframes coin-flip-y {
    0% {
       transform: rotateY(-360deg);
    }
    50% {
       transform: rotateY(360deg);
    } 
    100%{
       transform: rotateY(-360deg);
    } 
}


@keyframes rotate-y-default {
    0% {
       /* background-color: #eee; */
       transform: rotateY(0deg)
    }
     50% {
       transform: rotateY(360deg)
    } 
    100%{
       transform: rotateY(360deg)
    } 
}

@keyframes rotate-y {
    0% {
       /* background-color: #eee; */
       transform: rotateY(0deg)
    }
     50% {
       transform: rotateY(180deg)
    } 
    100%{
       transform: rotateY(360deg)
    } 
}

@keyframes rotate-x {
    0% {
       /* background-color: #eee; */
       transform: rotateX(0deg)
    }
     50% {
       transform: rotateX(180deg)
    } 
    100%{
       transform: rotateX(360deg)
    } 
}

@keyframes rotate-z {
    0% {
       /* background-color: #eee; */
       transform: rotateZ(0deg)
    }
     50% {
       transform: rotateZ(180deg)
    } 
    100%{
       transform: rotateZ(360deg)
    } 
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
<template>
 <div class="pos">
   <div class="lds-dual-ring"></div>
 </div>
</template>

<style scoped>
.pos{
   
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999999999;
  overflow: hidden;
  background: rgba(77, 77, 77, 0.61);
  }

  .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: rgb(255, 255, 255) transparent rgb(255, 255, 255) transparent;
  animation: squiz-in-out 1s linear infinite;

    display: block;
    position: absolute;
    top: 50%;
    margin-top: -4.05em;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes squiz-in-out {
    0% {
       transform: rotateZ(-350deg);
    }
    50% {
       transform: rotateZ(360deg);
        border: solid 12px white;
    } 
    100%{
       transform: rotateZ(-350deg);
    } 
}

</style>
<template>

<div class="col-md-5  container">
    <div class="row gy-4">
        <MainCardComponent></MainCardComponent>  
    </div>
</div>


</template>

<script>
import MainCardComponent from "./MainCardComponent.vue"
import TopCardComponent from "./TopCardComponent.vue"
import AdvertCardComponent from "./AdvertCardComponent.vue"
export default{
  components: {
    MainCardComponent,
    TopCardComponent,
    AdvertCardComponent
  }
}

</script>


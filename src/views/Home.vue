<template>
  <div class="container">
    <div class="navmenu">

      <div class="left">
        <img class="img-logo" alt="alterdata logo" src="@/assets/logo_alterdata.svg" @click.prevent="navigate()"/>
      </div>

      <div class="right">
        <ul>
          <li class="nav-item">Link 1</li>
          <li class="nav-item">Link 2</li>
          <li class="nav-item">Link 3</li>
        </ul>
      </div>

    </div>
  </div>

  
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {

  components: {
   
  },
  methods: {
    navigate() {
      window.open('https://www.alterdata.com.br/', '_blank');
    }
  },
};
</script>

<style scoped>
  .container {
    width: 100%;
    height: 50px;
    padding: 20px 40px 20px 40px;
  }
  .navmenu {
    background-color: '#FFF';
    display: inline;
  }
  .left {
    width: 40%;
    float:left;
    
  }
  .right {
    width: 60%;
    float:right
  }
  .img-logo {
    width: 50%;
    height: 50%;
    cursor: pointer;
  }
  .nav-item {
    display: inline;
    padding: 10px;
  }
  .nav-item:hover {
    background-color: #f5f5f5;
    border-radius: 10px;
  }

</style>


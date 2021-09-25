<template>
  <div class="navbar h-16 px-4 py-1 border-b flex items-center">
      <div class="navbar2 ">
        <div class="content-label2  hidden items-center mr-4">
          <label for='collapsable' class='button cursor-pointer'><Menu2 /></label>
        </div>
        <div class="search-container flex items-center">
          <Search class="search"/>
        </div>
        <div class="flex items-center">
          <div class="border-r pr-4">
            <img src="../assets/logo-historia.png" alt="" class="" style="height: 40px">
          </div>
          <img src="../assets/logo-ciudad.png" alt="" class="pl-4" style="height:40px">
        </div>
      </div>
  </div>
</template>
<script>


import Search from './Search.vue'
import Menu2 from './icons/Menu2.vue'

export default {
  name: "Navbar",
  components: {
    Search,
    Menu2
  }
}
</script>
<style scoped>
  .navbar {
    width: 100%;
    z-index: 100;
    background: white;
    position: sticky;
    top: 0;
  }

  .search-container {
      margin-left: 70px;
    }

  .navbar2 {
    width: 100%;
    display:grid;
    grid-template-columns: 1fr auto;
  }

  .content-label{
    transition: background-color 0.5s ease-in-out;
  }

  .button {
    cursor: pointer;
    font-weight: 800;
    color: black;
    font-size: 40px;
  }
  @media (max-width: 768px) {
    .search-container {
      display: none;
    }
    .content-label2 {
      display: flex;
    }

  }
</style>
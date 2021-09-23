<template>
  <div class="navbar w-full h-16 px-4 py-1 border-b items-center">
    <div class="content-label flex items-center mr-4">
      <label for='collapsable' class='button'><Menu /></label>
    </div>
    <div class="navbar2">
      <div class="flex items-center">
        <Search class="search"/>
      </div>
      <div class="flex items-center">
        <div class="border-r pr-2">
          <img src="../assets/logo-historia.png" alt="" class="" style="height: 40px">
        </div>
        <img src="../assets/logo-ciudad.png" alt="" class="pl-2" style="height:40px">
      </div>
    </div>
  </div>
</template>
<script>
import Menu from './icons/Menu.vue'
import Search from './Search.vue'

export default {
  name: "Navbar",
  components: {
    Menu,
    Search
  }
}
</script>
<style scoped>
  .navbar {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: white;
    position: sticky;
    top: 0;
  }

  .navbar2 {
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
    .search {
      display: none;
    }
  }
</style>
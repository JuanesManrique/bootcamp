<template>
  <div class="navbar w-full h-16 px-4 py-1 border-b flex items-center">
    <div class="content-label flex items-center">
      <label for='collapsable' class='button'><Menu /></label>
    </div>
  </div>
</template>
<script>
import Menu from './icons/Menu.vue'

export default {
  name: "Navbar",
  components: {
    Menu,
  }
}
</script>
<style>
  .navbar {
    background-color: white;
    position: sticky;
    top: 0;
  }

  .content-label{
    width: 100%;
    height: 100%;
    transition: background-color 0.5s ease-in-out;
  }

  .button {
    cursor: pointer;
    font-weight: 800;
    color: black;
    font-size: 40px;
  }
</style>
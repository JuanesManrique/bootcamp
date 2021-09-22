<template>
  <div class="home">
    <Sidebar />
    <div class="main">
      <Navbar />
      <div class="main_content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Sidebar,
    Navbar,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.home {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  .main{
    display:grid;
    grid-template-rows:auto 1fr;
  }

.main_content {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="home">
    <Sidebar />
    <div class="main">
      <div>
        <Navbar />
        <div class="div-search w-full py-3">
          <Search/>
        </div>
      </div>
      <div class="main_content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";

export default {
  components: {
    Sidebar,
    Navbar,
    Search
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
  padding: 0;
  width: 100%;
  height: 100%;
}

.div-search {
      display: none;
    }

@media (max-width: 768px) {
  .div-search {
    display: flex;
    padding-left: 24px;
  }
}

@media (max-width: 425px) {
  .div-search {
    display: flex;
    padding-left: 0px;
    justify-content: center;
  }
}

</style>

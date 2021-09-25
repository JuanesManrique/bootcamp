<template>
  <div class="home">
    <Sidebar />
    <div class="main">
      <Navbar />
      <div class="main_content">
        <div class="div-search w-full py-3">
          <Search/>
        </div>
        <router-view />
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Sidebar,
    Navbar,
    Search,
    Footer
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
  padding: 30px 50px 0 70px;
  width: 100%;
  height: 100%;
}

.div-search {
      display: none;
    }

@media (max-width: 768px) {
  .main_content {
  padding-left: 30px;
}
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

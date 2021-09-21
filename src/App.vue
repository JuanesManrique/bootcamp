<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from '../'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

</style>

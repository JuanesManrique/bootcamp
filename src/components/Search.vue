<template>
  <div class="">
    <form action="" method="post" class="">
      <label for="search" class="label-input border-b flex">
        <SearchIcon class="mr-2"/>
        <input type="search" name="" placeholder="Search" class="input-search w-full bg-white border-b">
      </label>
    </form>
  </div>
</template>
<script>

import SearchIcon from './icons/Search.vue'

export default {
  name: "Search",
  components: {
    SearchIcon,
  }
}
</script>
<style>
  .label-input {
    width: 300px;
    border-color: #2B5AC4;
  }

  .input-search {
    outline: none;
  }
</style>
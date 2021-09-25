<template>
  <input type='checkbox' id='collapsable' class="hidden">
  <div class="sidebar">
    <div class="main-content flex flex-col rounded-r py-4 px-6" style="background-color: #2B5AC4; height:100vh;">
      <div class="content-label mb-4 ">
        <label for='collapsable' class='button cursor-pointer'><Menu /></label>
      </div>
      <div class="list-container">
        <!-- <div class="logo-content justify-center"> 
          <img src="../assets/logoVillavicencio.png" alt="" style="width:70%;">
        </div> -->
        <ul>
          <li>
            <router-link
              to="/"
              class="li-content flex items-center mb-4 place-content-between hover:text-white"
              style="text-decoration: none;">
              <div class="flex items-center">
                <Home class="icon"/>
                <p class="ml-4 text-white">Home</p>
              </div>
            </router-link>
          </li>
          <li class="li-content flex items-center mb-4 place-content-between">
              <div class="flex items-center">
                <CategoriasIcon  class="icon"/>
                <p class="ml-4 text-white">Categorías</p>
              </div>
              <ChevronDown/>
          </li>
        </ul>
        <Categorias/>
        <!-- <NewModules /> -->
      </div>
    </div>
  </div>
</template>

<script>

import Menu from './icons/Menu.vue'
import Profile from './icons/Profile.vue'
import Plus from './icons/Plus.vue'
import ChevronDown from './icons/ChevronDown.vue'
import Config from './icons/Config.vue'
import Home from './icons/Home.vue'
import CategoriasIcon from './icons/Categorias.vue'
import Categorias from './Categorias.vue'


export default {
  name: "Sidebar",
  components: {
    Menu,
    Profile,
    Plus,
    ChevronDown,
    Config,
    Categorias,
    CategoriasIcon,
    Home
    /* NewModules, */
  },
  data() {
    return {
      posts: [],
      
      items: [
        {
          id: 1,
          /* icon: "Table",  */
          name: "Educación",
        },
        {
          id: 2,
          /* icon: "App", */
          name: "Tecnología",
        },
        {
          id: 3,
          /* icon: "App", */
          name: "Ambiente",
        },
        {
          id: 4,
          /* icon: "App", */
          name: "Historias",
        },
      ],
    }
  },

};
</script>

<style>

.content-label{
    transition: background-color 0.5s ease-in-out;
  }


.sidebar {
  z-index: 101;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 62px;
  transition: 0.3s;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 10px 0px 20px -9px rgba(66,66,66,1);
  
}

.logo-content {
  display: flex;
}

.workspace {
  background-color: white ;
}

#collapsable:checked + .sidebar {
  width: 60px;
  
}

#collapsable:checked + .sidebar .chevron-down {
  display: none;
}

#collapsable:checked + .sidebar .workspace p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .content-label{
  display: flex;
  justify-content: center;
  transition: background-color 0.5s ease-in-out;
}

#collapsable:checked + .sidebar .main-content .button-container p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .list-container p {
  display: none;
}

#collapsable:checked + .sidebar .main-content .list-container .li-content {
  padding: 0;
  justify-content: center;
} 

#collapsable:checked + .sidebar .main-content .config-container p {
  display: none;
} 

/* @media (min-width: 768) {

  .sidebar {
    top: 60px;
  }
  
} */

@media (max-width: 768px) {
  .content-label {
    display: none;
  }
  .search-container {
    display: none;
  }

  #collapsable:checked + .sidebar {
    width: 0;
  }

  #collapsable:checked + .sidebar .workspace .logo-content {
  display: none;
}

  #collapsable:checked + .sidebar .main-content .button-container {
    display: none;
  }
  #collapsable:checked + .sidebar .main-content {
    display:none;
  }
  #collapsable:checked + .sidebar .config-container {
    display: none;
  }
  #collapsable:checked + .sidebar .main-content .list-container .icon {
  display: none;
}
}
</style>

<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/#/">M.O.F</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/#/">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Q&A</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view/>

    <br>

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; MyOtherFriend 2018</p>
      </div>
      <!-- /.container -->
    </footer>
</div>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |  
      <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <router-view/> 
  </div> -->
  

</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

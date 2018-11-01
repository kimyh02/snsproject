<template>
  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class=""></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
      </ol>
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://t1.daumcdn.net/cfile/tistory/221F19475227E2434E')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Welcom !</h3>
          <p>MyOtherFriend</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://t1.daumcdn.net/cfile/tistory/251F19475227E23747')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Welcome !</h3>
          <p>Communicate with various friends.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item active" style="background-image: url('https://t1.daumcdn.net/cfile/tistory/271F19475227E22C3D')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Welcom !</h3>
          <p>Share your life with others.</p>
        </div>
      </div>
      <br>
      <form class="form-signin" style="width:20%; display: table; margin-left: auto;margin-right:auto;" onsubmit="return false;">
        <h1 class="h3 mb-3 font-weight-normal">MyOtherFriend</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="input.Email" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="input.Password" required>
        <button class="btn btn-lg btn-dark btn-block" v-on:click="login()">로그인</button>
        <router-link to="/signup"><button type="submit" class="btn btn-lg btn-navy btn-block">회원가입</button></router-link>
  
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  
  </header>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'home',
    components: {
      HelloWorld
    },
    data: function() {
      return {
        input: {
          Email: "",
          Password: ""
        },
        dataUrl: "https://www.abc.com"
      }
    },
    methods: {
      login() {
        // post로 보내기
        this.$http.post(this.dataUrl, this.input).then((res) => {
          console.log(res);
        });
  
      }
    }
  }
</script>

<style lang="scss" scoped>
  .carousel-item {
    height: 65vh;
    min-height: 300px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
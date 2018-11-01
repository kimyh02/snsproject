<template>
<form class="form-signup" style="width:20%; display: table; margin-left: auto;margin-right:auto;" >
    <label for="inputName" class="sr-only">Name</label>
    <input type="name" id="inputName" class="form-control" placeholder="Name" required autofocus>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <button class="btn btn-lg btn-dark btn-block" type="submit" v-on:click="add">가입하기</button>

    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
</form>
</template>
<script>
export default {
  methods: {
    add: function () {
      // 보낼 데이터
      let data = {title:this.title, isDone:false};
      // post로 보내기
      this.$http.post(this.dataUrl, data).then((res)=>{
        // id 삽입
        data.id = res.data.insertedId
        // 한줄 추가
        this.lines.push(data);
        // 입력창 초기화
        this.title = "";
      })        
    }
  }
}
</script>
<style>
</style>
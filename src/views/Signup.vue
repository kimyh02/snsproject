<template>
<form class="form-signup" style="padding-top:80px; width:20%; height:50%; display: table; margin-left: auto;margin-right:auto;" onsubmit="return false;">
    <label for="inputEmail" class="sr-only">휴대폰 번호 또는 이메일 주소</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="휴대폰 번호 또는 이메일 주소" v-model="input.email">
    <label for="inputName" class="sr-only">성명</label>
    <input type="name" id="inputName" class="form-control" placeholder="성명" v-model="input.name" required autofocus>
    <label for="inputNickName" class="sr-only">사용자 이름</label>
    <input type="nickname" id="inputNickName" class="form-control" placeholder="사용자이름" v-model="input.nickname" required autofocus>
    <label for="inputPassword" class="sr-only">비밀전호</label>
    <input type="password" id="inputPasswords" class="form-control" placeholder="비밀번호" v-model="input.password" required>
    <button class="btn btn-lg btn-dark btn-block" type="submit" v-on:click="add()">가입하기</button>

    <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
</form>
</template>
<script>
export default {
  data: function() {
    return {
      input: {
          email: "",
          name: "",
          nickname:"",
          password: ""
      },
      // 본인의 api gateway endpoint로 변경한다
     dataUrl: "https://04klf6kb8l.execute-api.ap-northeast-2.amazonaws.com/v1/snsproject?fn=signup"
    }
  },
  methods: {
    add: function () {
      //let input = {email:this.input.Email, name:this.input.Name, nickname:this.input.NickName, password:this.input.Password};
      // this.input = {email:"", name:"", n}
      // post로 보내기
      this.$http.post(this.dataUrl, this.input).then((res)=>{
        console.log(res);

        this.$router.replace('/main');
      })        
    }
  }
}
</script>
<style>
</style>
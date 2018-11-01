<template>
<div class="container" style="width: 526px;">
  <div style="background-color: rgb(244,67,54); width:100%; padding: 20px;">
    <h3 style="color: white; text-align: center; margin-bottom:10px;">My To Do List</h3>
    <form class="form-inline" onsubmit="return false;">
      <input type='text' placeholder="Title..." class="form-control" style="width:397px;" v-model="title">
      <button class="btn" style="background-color: rgb(217, 217, 217); color:#555;" v-on:click="add">
        Add
      </button>          
    </form>
  </div>
  <div style="width: 100%; text-align:left;">
    <div class="line" v-bind:class="{ done: line.isDone }" v-for="line in lines" v-bind:key="line.id">
      <i class="material-icons" v-on:click="change(line);">done</i>
      <span class="line-txt" v-bind:class="{ done: line.isDone }" >{{line.title}}</span>
      <i class="material-icons clear" v-on:click="clear(line);">clear</i>
    </div>        
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      // 본인의 api gateway endpoint로 변경한다
      dataUrl: "https://g3xsmxtahl.execute-api.ap-northeast-2.amazonaws.com/v1/todo",
      lines: [],
      title: ""
    }
  },
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
    },
    change: function(line) {
      // 보낼 데이터
      let data = {id:line.id, isDone:!line.isDone};
      // put으로 보내기
      this.$http.put(this.dataUrl, data).then(()=>{
        line.isDone = !line.isDone;
      })        
    },
    clear: function(line) {
      // delete으로 보내기
      this.$http.delete(this.dataUrl, {data: {id:line.id}}).then(()=>{
        this.lines.splice(this.lines.indexOf(line), 1);
      })         
    }
  },
  created: function() {
    this.$http.get(this.dataUrl).then((res)=>{
      this.lines = res.data;
    })
  }          
}
</script>
<style>
  input, button {
    border-radius: 0px !important;
  }
  /* 라인 기본 스타일 */
  .line {
    padding: 10px; background-color:rgb(238,238,238);
  }
  /* 라인 완료된 스타일 */
  .line.done {
    background-color:rgb(136,136,136); color:white;
  }
  .line-txt {
    vertical-align: top;
  }
  .clear {
    float: right;
  }
  i { 
    cursor: pointer;
  }
  .line-txt.done {
    text-decoration: line-through;
  }                              
</style>
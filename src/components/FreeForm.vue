<template>
  <div class="hello">
    <div class="box">
      <div class="titlebox">
        <p class="title">
          <span>Step3</span>
          <i class="fas fa-file-alt"></i>ご相談内容をご記入ください
        </p>
      </div>
      <div class="contents">
        <p>-ご相談内容-</p>
        <textarea cols="30" rows="10" v-model="user.userconcern" @change="setConcern"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeForm",
  data() {
    return {
      user: {
        userconcern: ""
      }
    };
  },
  methods: {
    setConcern: function() {
      return this.$store.commit("setConcern", this.user);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 680px;
  height: 380px;
  margin: auto;
  border: 1px solid #d8d8d8;
  background-color: white;
}
.contents {
  margin-left: 20px;
}
.title {
  width: 680px;
  font-size: 22px;
  margin: 0px;
  padding-bottom: 15px;
  border: 1px solid #00ffff;
  text-align: center;
  background-color: #afeeee;
}
form {
  padding-bottom: 30px;
}
textarea {
  width: 640px;
  height: 240px;
  margin-bottom: 10px;
}
</style>

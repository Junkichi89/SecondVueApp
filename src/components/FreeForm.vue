<template>
  <div class="hello">
    <div class="box">
      <div class="titlebox">
      <p class="title"><span>Step3</span><i class="fas fa-file-alt"></i>ご相談内容をご記入ください</p>
      </div>
      <div class="contents">
        <p>-ご相談内容-</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>

      </div>
    </div>
    <router-link to="about"><button>前に戻る ></button></router-link>
    <router-link to="/consultation"><button>次へ進む ></button></router-link>
  </div>
</template>

<script>
export default {
  name: "FreeForm",
  props: {
    msg: String
  },
  data() {
    return {
      year: 1990,
      month: 1,
      day: 1,
      days_max: "",
      seirekiS: "昭和",
      seirekiH: "平成"
    };
  },
  created: function() {
    this.get_days();
  },
  methods: {
    //日の最大数を取得
    get_days: function() {
      this.days_max = new Date(this.year, this.month, 0).getDate();
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
  height:380px;
  margin: auto;
  border: 1px solid #d8d8d8;
  background-color: white;
}
span {
  float: left;
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  border: 1px solid #00FFFF;
  background-color: #2C7CFF;
  border-radius: 4px;
  color:white;
}
.contents {
  margin-left: 20px;
}
.title {
  font-size: 22px;
  margin: 0px;
  padding-bottom: 15px;
  border: 1px solid #00FFFF;
  width: 680px;
  text-align: center;
  background-color: #AFEEEE;
}
form {
  padding-bottom: 30px;
}
textarea {
  width: 640px;
  height:240px;
  margin-bottom: 10px;
}
button {
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(53, 238, 142);
  border-radius: 5px;
  color: white;
  border: 1px ;
}
</style>

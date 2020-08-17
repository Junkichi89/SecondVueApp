<template>
  <div class="hello">
    <div class="box">
      <p class="title">
        <span>Step2</span>
        <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
      </p>
      <div class="contents">
        <p>現在、生命保険に加入されていますか？</p>
        <form v-on:change="selected">
          <p>
            <label>
              <input type="radio" name="gender" value="Yes" />はい
            </label>
            <label>
              <input type="radio" name="gender" value="No" />いいえ
            </label>
            <br />
          </p>
        </form>
        <div v-if="picked" v-on:change="clicked">
          <p>現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <p>
            <label>
              <input type="radio" name="answer" />はい
            </label>
            <label>
              <input type="radio" name="answer" />いいえ
            </label>
            <br />
          </p>
        </div>
        <form v-if="checked">
          <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <p>
            <label>
              <input type="radio" name="answer" />はい
            </label>
            <label>
              <input type="radio" name="answer" />いいえ
            </label>
            <br />
          </p>
        </form>
      </div>
    </div>
    <router-link to="/">
      <button>前へ戻る ></button>
    </router-link>
    <router-link to="/consultation">
      <button>次へ進む ></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Questionnaire",
  props: {
    msg: String
  },
  data() {
    return {
      picked: false,
      checked: false
    };
  },
  // created: function() {
  //   this.selected();
  // },
  methods: {
    selected: function() {
      this.picked = true;
    },
    clicked: function() {
      this.checked = true;
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
  width: 815px;
  margin: auto;
  border: 2px solid #d8d8d8;
  background-color: white;
}
span {
  float: left;
  padding: 2px 5px 2px 5px;
  font-size: 14px;
  border: 1px solid #00ffff;
  background-color: #2c7cff;
  border-radius: 4px;
  color: white;
}
.contents {
  margin-left: 20px;
}
.title {
  font-size: 22px;
  margin: 0px;
  padding-bottom: 15px;
  border: 1px solid #00FFFF;
  width: 815px;
  text-align: center;
  background-color: #AFEEEE;
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
  border: 1px;
}
form {
  padding-bottom: 30px;
}
.bitrthdate {
  margin-bottom: 0px;
}
p {
  margin: 15px;
}
select {
  width: 500px;
  height: 40px;
}
select.month {
  width: 100px;
}
select.day {
  width: 100px;
}
</style>

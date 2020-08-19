<template>
  <div class="hello">
    <div class="box">
      <p class="title">
        <span>Step2</span>
        <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
      </p>
      <div class="contents">
        <p>現在、生命保険に加入されていますか？</p>
        <form v-on:change="select">
          <p>
            <label>
              <input type="radio" name="answer1" v-bind:value="はい" />はい
            </label>
            <label>
              <input type="radio" name="answer1" v-bind:value="いいえ" />いいえ
            </label>
            <br />
          </p>
        </form>
        <div v-if="picked">
          <p>現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <form v-on:change="click">
            <p>
              <label>
                <input type="radio" name="answer2" v-bind:value="はい" />はい
              </label>
              <label>
                <input type="radio" name="answer2" v-bind:value="いいえ" />いいえ
              </label>
              <br />
            </p>
          </form>
        </div>
        <form v-if="checked">
          <p>過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <p>
            <label>
              <input type="radio" name="answer3" v-bind:value="はい" />はい
            </label>
            <label>
              <input type="radio" name="answer3" v-bind:value="いいえ" />いいえ
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
      answer1: "",
      answer2: "",
      answer3: "",
      picked: false,
      checked: false
    };
  },
  // created: function() {
  //   this.select();
  // },
  methods: {
    select: function() {
      this.picked = true;
    },
    click: function() {
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
.contents {
  margin-left: 20px;
}
.title {
  font-size: 22px;
  margin: 0px;
  width: 815px;
  padding-bottom: 15px;
  border: 1px solid #00ffff;
  text-align: center;
  background-color: #afeeee;
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
</style>

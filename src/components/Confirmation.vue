<template>
  <div class="hello">
    <div class="box">
      <p class="title">
        <span>Step4</span>
        <i class="fas fa-chalkboard-teacher"></i>以下の内容をご確認ください
      </p>
      <div class="contents">
        <p>
          -性別-
        </p>
        <div>
          {{ users.gender }}
        </div>
        <p>
          -生年月日-
        </p>
        <div>
          {{ users.year }}年{{ users.month }}月{{ users.day }}日
        </div>
        <p>
          -現在、生命保険に加入されていますか？-
        </p>
        <div>
          {{ usersinfo.answer1 }}
        </div>
        <p>
          -現在、入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-
        </p>
        <div>
          {{ usersinfo.answer2 }}
        </div>
        <p>
          -過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしたことがありますか？-
        </p>
        <div>
          {{ usersinfo.answer3 }}
        </div>
        <p>
          -相談内容-
        </p>
        <div>
          {{ usersconcern }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Confirmation",
  computed: {
    users: function() {
      return this.$store.state.users
    },
    usersinfo: function() {
      return this.$store.state.usersinfo
    },
    usersconcern: function() {
      return this.$store.state.usersconcern
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
p {
  margin: 15px;
}
div {
  margin-left: 30px;
}
</style>

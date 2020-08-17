<template>
  <div class="hello">
    <div class="box">
      <p class="title">
        <span>Step1</span>
        <i class="fas fa-address-card"></i>お客様の情報を入力ください
      </p>
      <div class="contents">
        <p>-性別-</p>
        <p class="gender">
          <label><input type="radio" name="gender" />男性</label>
          <label><input type="radio" name="gender" />女性</label>
          <br />
        </p>
        <p class="birthdate">-生年月日-</p>
        <form>
          <!-- 生年月日のselectBox -->
          <select class="year" v-model="year" @change="get_days">
            <option v-for= "n in 34" v-bind:value= "n + 1966" v-bind:key= "n + 1966">
              {{ n + 1966 }}年
              <span v-if="n < 23">（{{ seirekiS }}{{ n + 41 }})</span>
              <span v-else>（{{ seirekiH }}{{ n - 22 }})</span>
            </option>
          </select>年
          <select class="month" v-model="month" @change="get_days">
            <option v-for="n in 12" v-bind:value="n" v-bind:key="n">
              {{ n }}
            </option>
          </select>月
          <select class="day" v-model="day">
            <option v-for="n in days_max" v-bind:value="n" v-bind:key="n">
              {{ n }}
            </option>
          </select>日
        </form>
      </div>
    </div>
    <!-- <router-link to="/"><button>前に戻る ></button></router-link> -->
    <router-link to="about"><button>次へ進む ></button></router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
  height: 40px;
  font-size: 18px;
}
select.year {
  width: 180px;
  margin: 10px;

}
select.month {
  width: 80px;
  margin: 10px;
}
select.day {
  width: 80px;
  margin: 10px;
}
</style>

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
          <label>
            <input type="radio" name="gender" v-bind:value="男性" />男性
          </label>
          <label>
            <input type="radio" name="gender" v-bind:value="女性" />女性
          </label>
          <br />
        </p>
        <p class="birthdate">-生年月日-</p>
        <form>
          <!-- 生年月日のselectBox -->
          <select class="year" v-model="year" @change="getDays">
            <option v-for="number in 34" v-bind:value="number + 1966" v-bind:key="number + 1966">
              {{ number + 1966 }}年
              <span v-if="number < 23">（{{ seirekiS }}{{ number + 41 }})</span>
              <span v-else>（{{ seirekiH }}{{ number - 22 }})</span>
            </option>
          </select>年
          <select class="month" v-model="month" @change="getDays">
            <option v-for="number in 12" v-bind:value="number" v-bind:key="number">{{ number }}</option>
          </select>月
          <select class="day" v-model="day">
            <option v-for="number in daysMax" v-bind:value="number" v-bind:key="number">{{ number }}</option>
          </select>日
        </form>
      </div>
    </div>
    <!-- <router-link to="/"><button>前に戻る ></button></router-link> -->
    <router-link to="about">
      <button>次へ進む ></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CustomerInfo",
  props: {
    msg: String
  },
  data() {
    return {
      gender: "",
      year: 1990,
      month: 1,
      day: 1,
      daysMax: "",
      seirekiS: "昭和",
      seirekiH: "平成"
    };
  },
  created: function() {
    this.getDays();
  },
  methods: {
    //日の最大数を取得
    getDays: function() {
      this.daysMax = new Date(this.year, this.month, 0).getDate();
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
  width: 815px;
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

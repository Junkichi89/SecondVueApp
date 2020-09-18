<template>
  <div class="about">
    <Questionnaire />
    <router-link to="/">
      <button>前へ戻る ></button>
    </router-link>
    <router-link to="/consultation">
      <button>次へ進む ></button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Questionnaire from "@/components/Questionnaire.vue";

export default {
  name: "About",
  components: {
    Questionnaire
  }
};
</script>

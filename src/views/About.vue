<template>
  <div class="about">
    <Questionnaire />
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

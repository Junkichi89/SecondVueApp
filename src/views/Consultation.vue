<template>
  <div class="consultation">
    <FreeForm />
     <router-link to="about">
      <button>前に戻る ></button>
    </router-link>
    <router-link to="/summary">
      <button>次へ進む ></button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import FreeForm from "@/components/FreeForm.vue";

export default {
  name: "Consultation",
  components: {
    FreeForm
  }
};
</script>

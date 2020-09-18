<template>
  <div class="confirmation">
    <Confirmation />
    <router-link to="/consultation">
      <button>前へ戻る ></button>
    </router-link>
    <!-- <router-link> -->
    <button>送信 ></button>
    <!-- </router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Confirmation from "@/components/Confirmation.vue";

export default {
  name: "Summary",
  components: {
    Confirmation
  }
};
</script>

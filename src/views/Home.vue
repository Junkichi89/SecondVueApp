<template>
  <div class="home">
    <CustomerInfo />
    <router-link to="about">
      <button>次へ進む ></button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerInfo from "@/components/CustomerInfo.vue";

export default {
  name: "Info",
  components: {
    CustomerInfo
  }
};
</script>

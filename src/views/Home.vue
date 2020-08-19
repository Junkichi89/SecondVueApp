<template>
  <div class="home">
    <CustomerInfo />
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

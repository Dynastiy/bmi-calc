<template>
  <div>
    <div>
      <app-header />
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/navigation/AppHeader.vue";
// import AppFooter from '@/components/navigation/AppFooter.vue';
export default {
  components: { AppHeader },
  name: "HomeLayout",
  computed: {},
};
</script>

<style scoped></style>

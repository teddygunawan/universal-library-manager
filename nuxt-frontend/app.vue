<script setup>
await useFetch("http://localhost:3001", {
  method: "GET",
  server: false,
  immediate: true,
  onResponse({ request, response, options }) {
    console.log(response._data);
    console.log("Successfully configured CORS");
  },
});
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

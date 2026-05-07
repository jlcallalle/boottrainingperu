<script setup>
const showToast = inject('showToast')
</script>

<template>
  <ContactSection @show-toast="showToast" />
</template>

<script setup>
const toastMessage = ref('')
const showToast = ref(false)

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 2500)
}

// Make toast available to child pages via provide
provide('showToast', showToastMessage)
</script>

<template>
  <div>
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />

    <a class="whatsapp-float" href="/contacto" aria-label="WhatsApp">💬</a>

    <div class="toast-box" :class="{ show: showToast }">
      {{ toastMessage }}
    </div>
  </div>
</template>

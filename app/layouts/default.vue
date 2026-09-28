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

    <a
      class="whatsapp-float"
      href="https://wa.me/51999999999?text=Hola%2C%20deseo%20informaci%C3%B3n%20sobre%20las%20zapatillas%20para%20entrenar."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.04 3.2C9 3.2 3.28 8.9 3.28 15.92c0 2.24.59 4.43 1.72 6.36L3.2 28.8l6.69-1.75a12.7 12.7 0 0 0 6.15 1.57c7.03 0 12.76-5.7 12.76-12.72S23.07 3.2 16.04 3.2Zm0 23.27c-1.93 0-3.82-.52-5.47-1.5l-.39-.23-3.97 1.04 1.06-3.86-.25-.4a10.47 10.47 0 0 1-1.6-5.6c0-5.84 4.76-10.59 10.62-10.59s10.62 4.75 10.62 10.59-4.76 10.55-10.62 10.55Zm5.82-7.9c-.32-.16-1.89-.93-2.18-1.04-.29-.1-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.23-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.38 5.38 4.74.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>

    <div class="toast-box" :class="{ show: showToast }">
      {{ toastMessage }}
    </div>
  </div>
</template>

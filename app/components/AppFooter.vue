<template>
  <footer class="py-4 py-lg-5">
    <div class="container">
      <div class="footer-box p-4 p-lg-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
        <div>
          <strong class="d-block mb-1 footer-brand">Boot Fit Perú</strong>
          <p class="mb-0">
            Base visual en Nuxt para una tienda de zapatillas deportivas para gym en Perú.
          </p>
        </div>

        <div class="d-flex gap-2 flex-wrap">
          <NuxtLink class="btn secondary-btn px-4 py-3" to="/productos">Catálogo</NuxtLink>
          <NuxtLink class="btn primary-btn px-4 py-3" to="/contacto">Contacto</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

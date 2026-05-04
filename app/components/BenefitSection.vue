<script setup>
const benefits = [
  {
    icon: '🚚',
    title: 'Envíos a todo Perú',
    text: 'Comunica cobertura nacional y confianza desde el primer vistazo de la tienda.'
  },
  {
    icon: '📏',
    title: 'Cambios por talla',
    text: 'Ideal para reducir objeciones en compras online de calzado deportivo.'
  },
  {
    icon: '🔒',
    title: 'Compra segura',
    text: 'Espacio listo para integrar luego pasarela de pago y sellos de confianza.'
  },
  {
    icon: '💬',
    title: 'Atención rápida',
    text: 'Botones de contacto y compra conectables a WhatsApp o formulario comercial.'
  }
]
</script>

<template>
  <section id="beneficios" class="py-4 py-lg-5">
    <div class="container">
      <div class="section-head mb-4">
        <h3>Beneficios para tu tienda</h3>
        <p>
          Base visual para Nuxt, manteniendo un diseño elegante y orientado a conversión.
        </p>
      </div>

      <div class="row g-4">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="col-md-6 col-xl-3"
        >
          <div class="benefit-card">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
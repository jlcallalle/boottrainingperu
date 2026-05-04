<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['buy-product'])

const selectedSize = ref(35)

const sizes = [35, 36, 37, 38, 39]

const buyWhatsapp = () => {
  const message = `Hola, deseo comprar el modelo ${props.product.name} en talla ${selectedSize.value}.`
  const url = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
</script>

<template>
  <section id="detalle" class="py-4 py-lg-5">
    <div class="container">
      <div class="row g-4 align-items-stretch">
        <div class="col-lg-6">
          <div class="feature-panel media h-100">
            <img :src="product.image" :alt="`Detalle ${product.name}`">
          </div>
        </div>

        <div class="col-lg-6">
          <div class="feature-panel h-100">
            <div class="feature-content">
              <div class="eyebrow">Detalle de producto</div>

              <h3 class="detail-title">
                {{ product.name }}
              </h3>

              <p class="detail-description">
                Página de detalle con foto principal, precio, selección de talla, descripción comercial y acción rápida.
              </p>

              <div class="price-wrap mb-3">
                <strong>S/ {{ product.price.toFixed(2) }}</strong>
                <span>Hasta 5 cuotas sin intereses</span>
              </div>

              <div>
                <strong class="d-block mb-2">Selecciona tu talla</strong>

                <div class="d-flex flex-wrap gap-2">
                  <button
                    v-for="size in sizes"
                    :key="size"
                    class="chip"
                    :class="{ active: selectedSize === size }"
                    @click="selectedSize = size"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>

              <div class="d-flex gap-2 mt-4 card-actions-mobile">
                <button
                  class="btn detail-btn flex-fill py-3"
                  @click="emit('buy-product', product.name)"
                >
                  Agregar al carrito
                </button>

                <button
                  class="btn buy-btn flex-fill py-3"
                  @click="buyWhatsapp"
                >
                  Comprar por WhatsApp
                </button>
              </div>

              <ul>
                <li>
                  <span>✔</span>
                  <div>
                    <strong>Foto principal destacada</strong><br>
                    Estructura ideal para mostrar el producto con alto impacto visual.
                  </div>
                </li>

                <li>
                  <span>✔</span>
                  <div>
                    <strong>Tamaños y tallas</strong><br>
                    Selector visual reutilizable para futuras integraciones en Nuxt.
                  </div>
                </li>

                <li>
                  <span>✔</span>
                  <div>
                    <strong>Diseño responsive</strong><br>
                    Adaptado para escritorio y móvil con una sola base HTML.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
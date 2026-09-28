<script setup>
import { products } from '~/data/products'

const whatsappNumber = '51999999999'

const buyOnWhatsapp = (product) => {
  const message = `Hola, deseo información sobre ${product.name} de S/ ${product.price.toFixed(2)}.`
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
}
</script>

<template>
  <section class="py-4 py-lg-5">
    <div class="container">
      <div class="section-head products-head text-center mb-4">
        <div>
          <h3>Nuestros Productos</h3>
          <p>
            Catálogo visual con diseños listos para un ecommerce moderno de zapatillas deportivas.
          </p>
        </div>
      </div>

      <div class="product-grid">
        <div
          v-for="product in products"
          :key="product.name"
          class="product-grid-item"
        >
          <article class="card product-card">
            <div class="card-media">
              <span class="tag">{{ product.tag }}</span>
              <img :src="product.image" :alt="product.name">
            </div>

            <div class="card-body p-4 d-flex flex-column gap-2">
              <div class="card-title">{{ product.name }}</div>
              <div class="card-desc">{{ product.desc }}</div>

              <div class="price-wrap mt-1">
                <strong>S/ {{ product.price.toFixed(2) }}</strong>
                <span>{{ product.note }}</span>
              </div>

              <div class="d-flex flex-wrap gap-2 mt-2">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  class="chip"
                >
                  {{ size }}
                </button>
              </div>

              <div class="d-flex gap-2 mt-3 card-actions-mobile">
                <button
                  class="btn buy-btn w-100 py-3"
                  @click="buyOnWhatsapp(product)"
                >
                  Comprar por WhatsApp
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
